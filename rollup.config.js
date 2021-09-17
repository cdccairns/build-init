'use strict';

import { babel } from '@rollup/plugin-babel';
import { default as resolve } from '@rollup/plugin-node-resolve';

const config = [
  {
    input: 'src/js/main.js',
    plugins: [
      babel(),
      resolve()
    ],
    output: {
      file: 'dist/js/main.js',
      format: 'iife',
      sourcemap: true
    }
  }
];

export default config;
