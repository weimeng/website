import { defineCollection, z } from "astro:content";
import { documentLoader } from "./loaders/documentLoader";

const documents = defineCollection({
	loader: documentLoader("./src/documents"),
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = { documents };
