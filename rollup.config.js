import nodeResolve from 'rollup-plugin-node-resolve-angular';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'compiled/main-prod.js',
  sourceMap: false,
  treeshake: true,
  moduleName: 'bundle',
  plugins: [
    // rollupNG2(),
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
