import { readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

export interface NavigationItem {
	title: string;
	path: string;
	navigation?: NavigationItem[];
}

export interface NavigationData {
	navigation: NavigationItem[];
}

const navigationPath = join(process.cwd(), "src/data/navigation.yaml");

export const navData = yaml.load(
	readFileSync(navigationPath, "utf8"),
) as NavigationData;
