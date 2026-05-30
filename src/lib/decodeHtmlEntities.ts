/** Decode HTML entities from Asciidoctor strings used as plain text (e.g. titles). */
export function decodeHtmlEntities(html: string): string {
	return html
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&amp;/g, "&")
		.replace(/&#39;/g, "'")
		.replace(/&quot;/g, '"');
}
