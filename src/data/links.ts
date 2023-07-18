export const links = new Map<string, string>([
  ["templates", "https://disk.yandex.ru/d/PK_lFWHpvFSXOQ"],
]);

export function getLink(name: string) {
  const link = links.get(name);
  if (link) {
    return link;
  }
  throw new Error(`Link to ${name} not found`);
}
