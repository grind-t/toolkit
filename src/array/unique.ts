export function unique<T>(array: T[], by?: (item: T, idx: number) => unknown): T[] {
  if (!by) return [...new Set(array)];

  const seen = new Set<unknown>();

  return array.filter((item, idx) => {
    const value = by(item, idx);
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}
