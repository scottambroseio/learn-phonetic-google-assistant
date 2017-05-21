// @flow

import phoneticFor from './phonetic-for';
import spellWord from './spell-word';

const actionMap = new Map();

actionMap.set('phonetic-for', phoneticFor);
actionMap.set('spell-word', spellWord);

export default actionMap;
