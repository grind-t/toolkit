export type ExtendedCompressionFormat = CompressionFormat | "brotli";

export function decompress(
	stream: ReadableStream,
	format: ExtendedCompressionFormat,
): ReadableStream {
	const ds = new DecompressionStream(format as CompressionFormat);
	return stream.pipeThrough(ds);
}
