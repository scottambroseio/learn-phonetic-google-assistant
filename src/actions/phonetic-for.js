// @flow

export default (app: any) => {
  // arg names end up in lowercase - remember this!
  const letter = app.getArgument('letter');

  app.ask(`You asked for the phonetic for the letter ${letter}`);
};
