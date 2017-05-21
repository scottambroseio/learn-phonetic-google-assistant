// @flow

import firstAction from './first-action';
import secondAction from './second-action';

const actionMap = new Map();

actionMap.set('first-action', firstAction);
actionMap.set('second-action', secondAction);

export default actionMap;
