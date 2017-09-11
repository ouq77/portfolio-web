import nodeResolve from 'rollup-plugin-node-resolve-angular';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'compiled/main-prod.js',
  sourceMap: false,
  treeshake: true,
  name: 'bundle',
  plugins: [
    nodeResolve({
      es2015: true,
      jsnext: true,
      main: true,
      module: true,
    }),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
  ],
};
