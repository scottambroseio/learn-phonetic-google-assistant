// @flow

import { ApiAiApp as App } from 'actions-on-google';
import actionMap from './actions';

const application = (request: Object, response: Object) => {
  const app = new App({ request, response });

  app.handleRequest(actionMap);
};

export { application };
