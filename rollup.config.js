import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import replaceHtmlVars from 'rollup-plugin-replace-html-vars';

export default {
  preserveSymlinks: true,
  input: ['./animation-starwarstext.js'],
  output: {
    dir: './dist/js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel(),
    terser({
      output: {
        comments: false,
      },
    }),
    copy({
      targets: [{
        src: './animation-starwarstext.js',
        dest: './dist/js',
      },{
        src: './demo/css/styles.css',
        dest: './dist/css',
      },{
        src: './demo/img/*',
        dest: './dist/img',
      },{
        src: './demo/index.html',
        dest: './dist',
      }],
    }),
    replaceHtmlVars({
      files: './demo/index.html',
      from: '<script type="module" src="..',
      to: '<script type="module" src="js',
    }),
  ],
};

