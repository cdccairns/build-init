'use strict';

import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';

const config = [
  {
    input: 'src/js/main.js',
    plugins: [
      resolve(),
      eslint(),
      babel()
    ],
    output: {
      file: 'dist/js/main.js',
      format: 'iife',
      sourcemap: true
    }
  }
];

export default config;
