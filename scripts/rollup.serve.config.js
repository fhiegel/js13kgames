import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'iife',
  },
  watch: true,
  plugins: [
    copy({
      targets: [{ src: 'src/index.html', dest: 'dist' }],
    }),
    postcss({
      extensions: ['.css'],
    }),
    serve('dist'),
    livereload(),
  ],
};
