import { defineConfig } from "tsup";

export default defineConfig({
	name: "@grind-t/toolkit",
	entry: [
		"src/array/index.ts",
		"src/date/index.ts",
		"src/fn/index.ts",
		"src/nullish/index.ts",
		"src/object/index.ts",
		"src/string/index.ts",
	],
	outDir: "dist",
	format: "esm",
	experimentalDts: true,
	clean: true,
});
