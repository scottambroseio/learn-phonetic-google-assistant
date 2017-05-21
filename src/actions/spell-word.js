// @flow

import phoneticMap from '../phonetic'

export default (app: any) => {
  // arg names end up in lowercase - remember this!
  const word = app.getArgument('language').toLowerCase();
  const characters = word.split('');
  const spelling = characters.map((char) => phoneticMap[char]).join(' ');

  app.tell(`The spelling of ${word} is ${spelling}`);
};
