const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {name: 'source', alias: 's', type: String},
  {name: 'output', alias: 'o', type: String},
  {name: 'context', alias: 'c', type: String},
];

const compile = () => {
  const options = commandLineArgs(optionDefinitions);

  if (!options.source) {
    console.log('source required');
    process.exit();
  }
  if (!options.output) {
    console.log('output required');
    process.exit();
  }
  if (!options.context) {
    console.log('context required');
    process.exit();
  }

  const context = require(path.relative(__dirname, options.context));

  if (!context) {
    console.log(`cannot access context '${options.context}'`)
  }

  let source;

  try {
    source = fs.readFileSync(options.source, {encoding: 'UTF-8'});
  } catch (e) {
    console.log(`cannot read from source '${options.source}'`);
    process.exit();
  }

  const template = _.template(source);
  const renderedContent = template(context);

  try {
    fs.writeFileSync(options.output, renderedContent);
  } catch (e) {
    console.log(`error writing to output '${options.output}': ${e}`);
  }
};

compile();
