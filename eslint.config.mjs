import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  pluginJs.configs.recommended,
  ...compat.extends('eslint-config-airbnb-base'),
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        // 'jest' is not defined 오류
        ...globals.jest,
      },
      ecmaVersion: 'latest',
    },
    rules: {
      // package import를 제외한 모든 import 구문에 대해 확장자를 사용하도록 강제
      'import/extensions': ['error', 'ignorePackages'],
      // 기타 사소한 오류 해결
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
    },
  },
  {
    // 프로그래밍 요구 사항 적용
    files: ['music/src/**/*.js'],
    rules: {
      // 함수의 매개변수 개수 제한
      'max-params': ['error', 3],
      // 함수의 길이 제한
      'max-lines-per-function': ['error', { max: 20 }],
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      // eslint.config.js 파일에서만 'no-underscore-dangle' 규칙을 비활성화
      'no-underscore-dangle': 'off',
      // package.json 파일이 위치한 프로젝트 루트 디렉토리 경로를 명시
      'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    },
  },
];
