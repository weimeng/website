// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://weimeng.co",
	base: "/",
	trailingSlash: "never",
	build: {
		format: "file",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
