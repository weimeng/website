import { createHighlighter, type Highlighter } from "shiki";
import { decodeHtmlEntities } from "./decodeHtmlEntities";

const theme = "tokyo-night";
const langs = [
	"python",
	"shell",
	"bash",
	"powershell",
	"javascript",
	"plaintext",
] as const;

let highlighter: Highlighter | undefined;

async function getHighlighter(): Promise<Highlighter> {
	const wasCached = Boolean(highlighter);
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: [theme],
			langs: [...langs],
		});
	}
	// #region agent log
	fetch("http://127.0.0.1:7620/ingest/c57b2eb1-e90c-48a9-be0f-1499a4215583", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Debug-Session-Id": "443a0c",
		},
		body: JSON.stringify({
			sessionId: "443a0c",
			location: "highlightHtml.ts:getHighlighter",
			message: "shiki highlighter access",
			data: {
				theme,
				wasCached,
				createdNew: !wasCached,
				lifecycle: process.env.npm_lifecycle_event ?? null,
			},
			timestamp: Date.now(),
			hypothesisId: "B-C",
		}),
	}).catch(() => {});
	// #endregion
	return highlighter;
}

const codeBlockRe =
	/<pre class="highlight"><code(?: class="language-([^"]+)")?(?: data-lang="([^"]+)")?[^>]*>([\s\S]*?)<\/code><\/pre>/g;

export async function highlightAsciidocHtml(html: string): Promise<string> {
	const h = await getHighlighter();
	return html.replace(codeBlockRe, (match, classLang, dataLang, inner) => {
		const lang = classLang || dataLang || "plaintext";
		const code = decodeHtmlEntities(inner);
		try {
			return h.codeToHtml(code, { lang, theme });
		} catch {
			return match;
		}
	});
}

export async function initHighlighter(): Promise<void> {
	await getHighlighter();
}
