const _ = require('lodash');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {name: 'context', alias: 'c', type: String},
  {name: 'dir', alias: 'd', type: String},
  {name: 'sources', alias: 's', type: String},
];

const processTemplates = (dir, sources, context) => {
  sources.forEach(source => {
    glob(`${dir}/${source}`, (err, matches) => {
      if (err) {
        console.log(`cannot compile sources for ${source}`);
        return;
      }
      matches.forEach(match => {
        try {
          _.runInContext();
          if (match.includes('.js')) {
            _.templateSettings = {
              interpolate: /<%[=\-]? (.+?) %>/g
            };
          }
          const file = fs.readFileSync(match, {encoding: 'UTF-8'});

          try {
            const template = _.template(file);
            const renderedContent = template(context);

            try {
              fs.writeFileSync(match, renderedContent);
            } catch (e) {
              console.log(`error writing to output '${match}': ${e}`);
            }
          } catch (e) {
            console.log(`error templating file '${match}': ${e}`);
          }
        } catch (e) {
          console.log(`cannot read from source '${match}'`);
          process.exit();
        }
      })
    });
  });
};

const templateCompile = () => {
  const options = commandLineArgs(optionDefinitions);

  if (!options.context) {
    console.log('context required');
    process.exit();
  }

  if (!options.sources) {
    console.log('sources required');
    process.exit();
  }

  const context = require(path.relative(__dirname, options.context));

  if (!context) {
    console.log(`cannot access context '${options.context}'`);
  }

  let dir = 'build'
  if (options.dir) {
    console.log(`overriding default '${dir}' with '${options.dir}'`)
    dir = options.dir
  }

  const sources = options.sources.split('|');

  processTemplates(dir, sources, context);
};

templateCompile();
