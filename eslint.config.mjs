import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  // import 순서 정렬
  {
    plugins: {
      import: await import('eslint-plugin-import'),
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node 내장 (fs, path 등)
            'external', // 외부 라이브러리 (react, next 등)
            'internal', // 내부 모듈 (@/components 등)
            'parent', // ../
            'sibling', // ./
            'index', // index.ts
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/no-duplicates': 'warn',
    },
  },
];

export default eslintConfig;
