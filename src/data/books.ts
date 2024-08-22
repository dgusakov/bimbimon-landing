export const books = new Map<string, string>([
  ['puss-in-boots', 'https://youtu.be/CjZ7j71kpvM'],
]);

export function getBookLink(name: string) {
  const link = books.get(name);
  if (link) {
    return link;
  }
  throw new Error(`Book ${name} not found`);
}
