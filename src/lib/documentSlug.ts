/** Match Gatsby createFilePath URLs relative to src/documents/. */
export function documentSlug(relativePath: string): string {
	let slug = relativePath.replace(/\.adoc$/, "");
	if (slug.endsWith("/index")) {
		slug = slug.slice(0, -"/index".length);
	}
	return slug;
}
