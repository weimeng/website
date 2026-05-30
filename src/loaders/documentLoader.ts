import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import Asciidoctor from "asciidoctor";
import type { Loader } from "astro/loaders";
import { decodeHtmlEntities } from "../lib/decodeHtmlEntities";
import { documentSlug } from "../lib/documentSlug";
import { highlightAsciidocHtml, initHighlighter } from "../lib/highlightHtml";

const asciidoctor = Asciidoctor();

async function collectAdocFiles(
	dir: string,
	files: string[] = [],
): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) {
			await collectAdocFiles(path, files);
		} else if (entry.isFile() && /\.adoc$/.test(entry.name)) {
			files.push(path);
		}
	}
	return files;
}

export function documentLoader(documentsDir: string): Loader {
	return {
		name: "document-loader",
		load: async ({ config, store, parseData }) => {
			const rootDir = fileURLToPath(new URL(documentsDir, config.root));
			const adocFiles = await collectAdocFiles(rootDir);
			await initHighlighter();

			// #region agent log
			fetch("http://127.0.0.1:7620/ingest/c57b2eb1-e90c-48a9-be0f-1499a4215583", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Debug-Session-Id": "443a0c",
				},
				body: JSON.stringify({
					sessionId: "443a0c",
					location: "documentLoader.ts:load",
					message: "content loader ran",
					data: {
						adocCount: adocFiles.length,
						lifecycle: process.env.npm_lifecycle_event ?? null,
					},
					timestamp: Date.now(),
					hypothesisId: "A",
				}),
			}).catch(() => {});
			// #endregion

			for (const filePath of adocFiles) {
				const rel = relative(rootDir, filePath).replace(/\\/g, "/");
				const id = documentSlug(rel);
				const doc = asciidoctor.loadFile(filePath, {
					safe: "server",
					attributes: {
						showtitle: false,
					},
				});
				const title = decodeHtmlEntities(doc.getTitle() ?? id);
				const rawHtml = doc.convert() as string;
				const html = await highlightAsciidocHtml(rawHtml);
				const data = await parseData({
					id,
					data: { title },
				});

				store.set({
					id,
					data,
					rendered: { html },
				});
			}
		},
	};
}
