import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/nullish/index.ts",
    "src/string/index.ts",
    "src/array/index.ts",
    "src/date/index.ts",
    "src/fn/index.ts",
    "src/object/index.ts",
    "src/stream/index.ts",
  ],
});
