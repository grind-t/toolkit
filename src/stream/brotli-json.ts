import { decompressJson } from "./decompress-json.ts";

export function brotliJson(input: Response | ReadableStream): Promise<any> {
	return decompressJson(input, "brotli");
}
