export const videos = new Map<string, string>([
  // Human
  ['bones', 'https://www.youtube.com/watch?v=6C_RWeZtCNg'],
  ['muscles', 'https://www.youtube.com/watch?v=tf6ZvSB4fE4'],
  ['digestion', 'https://www.youtube.com/watch?v=nmGXEESqSf4'],
  ['breath', 'https://www.youtube.com/watch?v=Q6GI4w5eFb4'],
  ['brain', 'https://www.youtube.com/watch?v=rvXSIojvpGs'],
  ['birth', 'https://www.youtube.com/watch?v=zn0obDwK8lM'],
  ['heart', 'https://youtu.be/xqo9sMQwhYQ'],
  ['tooth', 'https://youtu.be/f5vIcwBWSD0'],
  // Cars
  ['move-and-brake', 'https://www.youtube.com/watch?v=nAPooI-lEJY'],
  ['safety', 'https://www.youtube.com/watch?v=mBjb8LwtDbg'],
  ['steering', 'https://www.youtube.com/watch?v=Tpm0nmK_J0c'],
  ['assembly', 'https://www.youtube.com/watch?v=tm5xyNWZ0wI'],
  // Money
  ['money-history', 'https://www.youtube.com/watch?v=0oTBx2lNr74'],
  ['family-budget', 'https://www.youtube.com/watch?v=5Lbda1tyx4Y'],
  // Time
  ['week', 'https://youtu.be/eGaXH-LYJ5k'],
  ['year', 'https://youtu.be/xkbfByKcxhY'],
  ['understand-time', 'https://youtu.be/SOgTCHQm8us'],
]);

export function getVideoLink(name: string) {
  const link = videos.get(name);
  if (link) {
    return link;
  }
  throw new Error(`Video ${name} not found`);
}
