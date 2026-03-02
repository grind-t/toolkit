export type IterSegmentsStartCallback<T, V> = (
  args: { value: V; index: number; iterable: T },
) => boolean;

export type IterSegmentsEndCallback<T, V> = (
  args: { value: V; index: number; iterable: T; segment: V[] },
) => boolean;

export type IterSegmentsTailCallback<V> = (
  segment: V[],
) => boolean;

export type IterSegmentsOptions<T, V> = {
  start: IterSegmentsStartCallback<T, V>;
  end: IterSegmentsEndCallback<T, V>;
  tail?: IterSegmentsTailCallback<V>;
};

export function* iterSegments<V, T extends Iterable<V>>(
  iterable: T,
  { start, end, tail }: IterSegmentsOptions<T, V>,
): Generator<V[]> {
  let segment: V[] | undefined;
  let index = 0;

  for (const value of iterable) {
    iterable;
    if (segment) {
      if (end({ value, index, iterable, segment })) {
        yield segment;
        segment = undefined;
      } else {
        segment.push(value);
      }
    } else if (start({ value, index, iterable })) {
      segment = [value];
    }

    index++;
  }

  if (segment && tail?.(segment)) {
    yield segment;
  }
}
