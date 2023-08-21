import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'iife',
  },
  plugins: [
    terser(),
    copy({
      targets: [{ src: 'src/index.html', dest: 'dist' }],
    }),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
