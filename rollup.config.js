import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  preserveSymlinks: true,
	input: ['animation-starwarstext.js'],
	output: {
		file: 'dist/animation-starwarstext.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
    babel(),
    terser()
  ]
};