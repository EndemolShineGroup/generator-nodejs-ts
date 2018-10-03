"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @TODO Replace this with `fs.walkDir()` or similar
exports.Files = [
    // Node
    'package.json',
    '.nvmrc',
    // Typescript
    'tsconfig.json',
    'tsconfig.test.json',
    // Jest
    'jest.config.js',
    // Formatting
    'tslint.json',
    'prettier.config.js',
    // Git
    'README.md',
    'CHANGELOG.md',
    'CONTRIBUTING.md',
    '.gitignore',
    '.github/PULL_REQUEST_TEMPLATE.md',
    '.github/ISSUE_TEMPLATE/bug_report.md',
    '.github/ISSUE_TEMPLATE/feature_request.md',
    '.github/ISSUE_TEMPLATE/documentation_improvement.md',
    // Git Hooks and Tools
    '.czrc',
    '.huskyrc',
    '.commitlintrc.js',
    '.lintstagedrc.yml',
    // Code Tools
    '.editorconfig',
    // src
    'src/index.ts'
];
exports.PublicFiles = [
    '.codeclimate.yml',
    '.travis.yml',
    '.releaserc',
    'LICENSE'
];
exports.PrivateFiles = [
    'buildspec.yml'
];
exports.default = (gen) => {
    const copyTemplate = (path) => {
        gen.fs.copyTpl(gen.templatePath(path), gen.destinationPath(path), gen.answers);
    };
    let OutputFiles = [...exports.Files];
    if (gen.answers.isPublic) {
        OutputFiles.push(...exports.PublicFiles);
    }
    else {
        OutputFiles.push(...exports.PrivateFiles);
    }
    OutputFiles.forEach(copyTemplate);
};
//# sourceMappingURL=templating.js.map