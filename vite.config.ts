import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        nullish: resolve(__dirname, "lib/nullish/index.ts"),
        string: resolve(__dirname, "lib/string/index.ts"),
        array: resolve(__dirname, "lib/array/index.ts"),
        date: resolve(__dirname, "lib/date/index.ts"),
        fn: resolve(__dirname, "lib/fn/index.ts"),
      },
      name: "Toolkit",
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
