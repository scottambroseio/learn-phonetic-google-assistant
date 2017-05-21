// @flow

import { ApiAiApp as App } from 'actions-on-google';
import actionMap from './actions';

exports.application = (req: Object, res: Object) => {
  const app = new App({ req, res });

  app.handleRequest(actionMap);
};
