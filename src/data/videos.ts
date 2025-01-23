export const videos = new Map<string, string>([
  // Human
  ["bones", "https://rutube.ru/video/859237ae0280b712a4de978234aa334f/?r=wd"],
  ["muscles", "https://rutube.ru/video/ca36b2c8645248acb05c43b15985e56d/?r=wd"],
  [
    "digestion",
    "https://rutube.ru/video/b031c7d314bee291ab774194730b72b9/?r=wd",
  ],
  ["breath", "https://rutube.ru/video/74a1c338d77d69142ebbbe16144c5aa4/?r=wd"],
  ["brain", "https://rutube.ru/video/0cb2e72a651e3866a88390894784e75b/?r=wd"],
  ["birth", "https://rutube.ru/video/33eb7f6248a7c44b7a3f6292b4413464/?r=wd"],
  ["heart", "https://rutube.ru/video/f1452b6639e396805f7081aec0cd64bf/?r=wd"],
  ["tooth", "https://rutube.ru/video/6aba995366c6c0ee4260ca34800510dd/?r=wd"],
  // Cars
  [
    "move-and-brake",
    "https://rutube.ru/video/9a9f6909610e13ecff9c138d8629b4d2/?r=wd",
  ],
  ["safety", "https://rutube.ru/video/9f24c3764f77da4b3491c5e097aebc26/?r=wd"],
  [
    "steering",
    "https://rutube.ru/video/2725edf44ff8600f719449682f206754/?r=wd",
  ],
  [
    "assembly",
    "https://rutube.ru/video/0e4ab5234366ad88fae6f4a36f707ce6/?r=wd",
  ],
  // Money
  [
    "money-history",
    "https://rutube.ru/video/a28f98335c5ac1fd40dfd06c74cf65d0/?r=wd",
  ],
  [
    "family-budget",
    "https://rutube.ru/video/0df5612e596b3abb4eefa8b8e390433f/?r=wd",
  ],
  // Time
  ["week", "https://rutube.ru/video/eda974427539a3cb24def8d48c260a97/?r=wd"],
  ["year", "https://rutube.ru/video/69773dfb9a5cd7f32da93b18d839d673/?r=wd"],
  [
    "understand-time",
    "https://rutube.ru/video/ced7c5d37128f5c1c41cb41cf86f2970/?r=wd",
  ],
]);

export function getVideoLink(name: string) {
  const link = videos.get(name);
  if (link) {
    return link;
  }
  throw new Error(`Video ${name} not found`);
}
