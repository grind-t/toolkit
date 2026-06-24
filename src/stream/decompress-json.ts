import { decompress, type ExtendedCompressionFormat } from "./decompress.ts";

export function decompressJson(
	input: Response | ReadableStream,
	format: ExtendedCompressionFormat,
): Promise<any> {
	const stream = input instanceof Response ? input.body : input;
	const decompressed = stream && decompress(stream, format);
	return new Response(decompressed).json();
}
