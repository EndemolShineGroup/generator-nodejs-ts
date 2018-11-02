# [1.10.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.9.0...v1.10.0) (2018-11-02)


### Bug Fixes

* **subgenerators:** move package.json updates to writing() lifecycle ([f853a7e](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/f853a7e))


### Features

* **docs:** add docs subgenerator ([7a1accd](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/7a1accd)), closes [#37](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/37)

# [1.9.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.8.0...v1.9.0) (2018-11-01)


### Bug Fixes

* **build:** only notify Slack on build changes and failures ([b105bb1](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/b105bb1))
* **typescript:** remove JSON type and enable resolveJsonModule ([23d4599](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/23d4599))


### Features

* **process:** add git-author-check ([96d0a74](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/96d0a74))

# [1.8.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.7.0...v1.8.0) (2018-10-31)


### Bug Fixes

* **scripts:** remove invalid subgenerator name ([25ce4f9](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/25ce4f9))
* **subgenerators:** move dependencies to related generator ([c92d2b0](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/c92d2b0))


### Features

* **typescript:** add options to subgenerator ([fc1f54e](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/fc1f54e))

# [1.7.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.6.0...v1.7.0) (2018-10-28)


### Bug Fixes

* **tests:** ignore test setup file and enable coverage thresholds ([31b8760](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/31b8760))


### Features

* move all content into subgenerators ([284761a](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/284761a))

# [1.6.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.5.0...v1.6.0) (2018-10-27)


### Features

* **node:** move Node content to subgenerator ([ce60c23](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/ce60c23))

# [1.5.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.4.0...v1.5.0) (2018-10-27)


### Bug Fixes

* **probot:** remove CodeClimate status check ([cae44fc](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/cae44fc))


### Features

* use subgenerators ([6726358](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/6726358)), closes [#12](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/12)

# [1.4.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.3.2...v1.4.0) (2018-10-24)


### Bug Fixes

* **templating:** remove unnecessary title ([9e79895](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/9e79895))
* **templating:** remove unused links ([88c12b5](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/88c12b5))
* **templating:** use scoped jira smart commit ([5b39216](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/5b39216))
* **templating:** use valid version of Commitizen JIRA adapter ([b26febb](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/b26febb)), closes [#21](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/21)


### Features

* **github:** add CODEOWNERS to template ([2b57704](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/2b57704)), closes [#18](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/18)
* **github:** add configuration file for Probot Settings ([06109e7](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/06109e7)), closes [#19](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/19)
* **npmrc:** move publishConfig from package.json to .npmrc ([799f14d](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/799f14d)), closes [#20](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/20)
* **templating:** only generate coverage from full test suite runs ([c7939b6](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/c7939b6)), closes [#25](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/25)
* **tslib:** add tslib and set required settings in tsconfig.json ([2e9acca](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/2e9acca)), closes [#31](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/31)

## [1.3.2](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.3.1...v1.3.2) (2018-10-16)


### Bug Fixes

* **commiting:** add commitizen jira adaptor for private projects ([4c29636](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/4c29636)), closes [#16](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/16)
* **templating:** only add issue templates for public projects ([91c57ae](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/91c57ae)), closes [#17](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/17)
* **templating:** use correct values in tsconfig.json ([0560ada](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/0560ada))

## [1.3.1](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.3.0...v1.3.1) (2018-10-15)


### Bug Fixes

* **templating:** disable patch branch checks on CodeCov ([7b91ab1](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/7b91ab1))

# [1.3.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.2.2...v1.3.0) (2018-10-14)


### Features

* **templating:** add [@endemolshinegroup](https://github.com/endemolshinegroup)/cz-github ([aac1506](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/aac1506))

## [1.2.2](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.2.1...v1.2.2) (2018-10-13)


### Bug Fixes

* **ci:** run lint on Travis ([c1bc755](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/c1bc755))
* **templating:** add src/ and coverage/ folders to .npmignore ([591910d](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/591910d)), closes [#15](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/15)
* **templating:** use inline sourcemaps ([835e73f](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/835e73f))

## [1.2.1](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.2.0...v1.2.1) (2018-10-12)


### Bug Fixes

* **templating:** add missing files to template list ([a571f9a](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/a571f9a))

# [1.2.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.1.0...v1.2.0) (2018-10-12)


### Bug Fixes

* **templating:** make travis secure environment variables clearer ([614833d](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/614833d)), closes [#9](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/9)
* only ignore generated documentation in template ([c372987](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/c372987))


### Features

* add JSON import support to template ([edef66d](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/edef66d))
* add stub code and tests to template ([3a57ff5](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/3a57ff5))

# [1.1.0](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.7...v1.1.0) (2018-10-08)


### Bug Fixes

* remove dollar signs from bash output in template ([6113199](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/6113199))


### Features

* add git initialization and initial commit ([1d72c84](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/1d72c84))
* update TSLint and Prettier configuration in templates ([f05d4f0](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/f05d4f0)), closes [#10](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/10) [#11](https://github.com/EndemolShineGroup/generator-nodejs-ts/issues/11)

## [1.0.7](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.6...v1.0.7) (2018-10-05)


### Bug Fixes

* **npm:** add npmignore to templated file list ([ada9525](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/ada9525))

## [1.0.6](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.5...v1.0.6) (2018-10-05)


### Bug Fixes

* **travis:** change Git commands to push release commit back to develop ([2eba5e3](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/2eba5e3))

## [1.0.5](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.4...v1.0.5) (2018-10-05)


### Bug Fixes

* **docs:** add scope to project name in README ([a9c3ee8](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/a9c3ee8))

## [1.0.4](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.3...v1.0.4) (2018-10-05)


### Bug Fixes

* **tsc:** add rootDir property to tsconfig.json ([8973c05](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/8973c05))

## [1.0.3](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.2...v1.0.3) (2018-10-05)


### Bug Fixes

* **npm:** add .npmignore to template ([a8c609a](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/a8c609a))
* add missing backtick ([403ae85](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/403ae85))
* **npm:** fix path in .npmignore ([936bc14](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/936bc14))
* **templates:** fix accidentally renamed reference inside template ([3434d14](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/3434d14))
* **templates:** now use _ to prefix template files ([18ebeb1](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/18ebeb1))

## [1.0.2](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.1...v1.0.2) (2018-10-05)


### Bug Fixes

* **npm:** add .npmignore and include dist/ folder ([2fa784b](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/2fa784b))

## [1.0.1](https://github.com/EndemolShineGroup/generator-nodejs-ts/compare/v1.0.0...v1.0.1) (2018-10-05)


### Bug Fixes

* **dependencies:** remove unnecessary dependencies ([61cbfe1](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/61cbfe1))
* **keywords:** Adds keywords to package.json ([e0051b1](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/e0051b1))

# 1.0.0 (2018-10-03)


### Bug Fixes

* removed whitespace lul ([5ecbbc2](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/5ecbbc2))
* **readme:** update Travis link ([6e974df](https://github.com/EndemolShineGroup/generator-nodejs-ts/commit/6e974df))
