import nodeResolve from 'rollup-plugin-node-resolve-angular';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'compiled/main-prod.js',
  treeshake: true,
  output:{
    file: 'compiled/bundle.es2015.js',
    format: 'iife',
    sourcemap: false,
  },
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
