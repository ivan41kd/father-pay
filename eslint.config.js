import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended', 'plugin:react/jsx-runtime'],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
]);
