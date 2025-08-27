export function generateKey(
  name: string,
  baseName: string,
  index: number
) {
  return `${baseName}-${name}-${index}`;
}
