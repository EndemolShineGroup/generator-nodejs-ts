![Banner][icon-banner]

[![MIT Licensed][icon-license]][link-license]
[![NPM Version][icon-npm]][link-npm]
[![Build Status][icon-ci]][link-ci]
[![Dependabot Status][icon-dependabot]][link-dependabot]

[![Code Issues][icon-issues]][link-issues]
[![Codebase Maintainability][icon-maintainability]][link-maintainability]
[![Test Coverage][icon-coverage]][link-coverage]
[![Jest][icon-jest]][link-jest]

[![Commitizen][icon-commitizen]][link-commitizen]
[![Semantic Release][icon-semantic-release]][link-semantic-release]
[![Prettier][icon-prettier]][link-prettier]

A Yeoman project generator for Typescript projects. This generator is geared
towards quickly getting set up with a best-practices compliant, testable
TypeScript project that can be set up with CI/CD as painlessly as possible.

## Installation

```bash
yarn global add @endemolshinegroup/generator-nodejs-ts
```

## Usage

```bash
yo @endemolshinegroup/nodejs-ts
```

The above command will generate a Node project with the following:

- [TypeScript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Commitizen](https://commitizen.github.io/cz-cli/)
- [CommitLint](https://marionebl.github.io/commitlint/#/)
- [Semantic Release](https://semantic-release.gitbooks.io/)

The generator is capable of creating both public open source projects as well
as private projects.

If a public project is created, the following services are added:

- [CodeClimate](https://codeclimate.com/)
- [CodeCov](https://codecov.io/)
- [Greenkeeper](https://greenkeeper.io/)
- [Travis CI](http://travis-ci.com/)

If a private project is created, the following services are added:

- [AWS CodeBuild](https://aws.amazon.com/codebuild/)

[icon-banner]: docs/assets/banner.png

[icon-license]: https://img.shields.io/github/license/EndemolShineGroup/generator-nodejs-ts.svg?longCache=true&style=flat-square
[link-license]: LICENSE
[icon-npm]: https://img.shields.io/npm/v/@endemolshinegroup/generator-nodejs-ts.svg?longCache=true&style=flat-square
[link-npm]: https://www.npmjs.com/package/@endemolshinegroup/generator-nodejs-ts
[icon-ci]: https://img.shields.io/travis/EndemolShineGroup/generator-nodejs-ts.svg?longCache=true&style=flat-square
[link-ci]: https://travis-ci.org/EndemolShineGroup/generator-nodejs-ts
[icon-dependabot]: https://flat.badgen.net/dependabot/EndemolShineGroup/generator-nodejs-ts?icon=dependabot
[link-dependabot]: https://dependabot.com/

[icon-issues]: https://img.shields.io/codeclimate/issues/EndemolShineGroup/generator-nodejs-ts.svg?longCache=true&style=flat-square
[link-issues]: https://codeclimate.com/github/EndemolShineGroup/generator-nodejs-ts/issues
[icon-maintainability]: https://img.shields.io/codeclimate/maintainability/EndemolShineGroup/generator-nodejs-ts.svg?longCache=true&style=flat-square
[link-maintainability]: https://codeclimate.com/github/EndemolShineGroup/generator-nodejs-ts
[icon-coverage]: https://img.shields.io/codecov/c/github/EndemolShineGroup/generator-nodejs-ts/develop.svg?longCache=true&style=flat-square
[link-coverage]: https://codecov.io/gh/EndemolShineGroup/generator-nodejs-ts

[icon-jest]: https://img.shields.io/badge/tested_with-jest-99424f.svg?longCache=true&style=flat-square
[link-jest]: https://jestjs.io/

[icon-commitizen]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?longCache=true&style=flat-square
[link-commitizen]: http://commitizen.github.io/cz-cli/
[icon-semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?longCache=true&style=flat-square
[link-semantic-release]: https://semantic-release.gitbooks.io/semantic-release/
[icon-prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?longCache=true&style=flat-square
[link-prettier]: https://prettier.io/
