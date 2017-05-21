// @flow

const map = {
  a: 'alfa',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  I: 'india',
  j: 'juliett',
  k: 'kilo',
  l: 'lima',
  m: 'mike',
  n: 'november',
  o: 'oscar',
  p: 'papa',
  q: 'quebec',
  r: 'romeo',
  s: 'sierra',
  T: 'tango',
  u: 'uniform',
  v: 'victor',
  w: 'whiskey',
  x: 'xray',
  y: 'yankee',
  z: 'zulu'
};

export default (app: any) => {
  // arg names end up in lowercase - remember this!
  const letter = app.getArgument('letter').toLowerCase();

  app.tell(`The phonetic for the letter ${letter} is ${map[letter]}`);
};
