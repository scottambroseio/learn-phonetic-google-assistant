// @flow

import phoneticMap from '../phonetic'

export default (app: any) => {
  // arg names end up in lowercase - remember this!
  const letter = app.getArgument('letter').toLowerCase();

  app.tell(`The phonetic for the letter ${letter} is ${phoneticMap[letter]}`);
};
