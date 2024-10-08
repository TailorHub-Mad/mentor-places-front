import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'
import eslintConfigPrettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')])

export default [
  ...patchedConfig,
  ...ts.configs.recommended,
  {
    ignores: [
      '**/node_modules/',
      '**/package.json',
      '**/yarn.lock',
      '**/.eslintrc.json',
      'src/styles/**/*',
      '**/tsconfig.json',
      '**/next.config.js'
    ]
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['error'] }]
    }
  },
  eslintConfigPrettier
]
