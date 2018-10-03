import Generator from "yeoman-generator";
import EndemolGenerator from ".";

export type FixedGenerator = Generator & { answers: Generator.Answers };

// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = [
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

export const PublicFiles: string[] = [
  '.codeclimate.yml',
  '.travis.yml',
  '.releaserc',
  'LICENSE'
];

export const PrivateFiles: string[] = [
  'buildspec.yml'
];

export default (gen: FixedGenerator) => {

  const copyTemplate = (path: string) => {
    gen.fs.copyTpl(
      gen.templatePath(path),
      gen.destinationPath(path),
      gen.answers
    );
  };

  let OutputFiles: string[] = [ ...Files ];
  if(gen.answers.isPublic) {
    OutputFiles.push(...PublicFiles)
  } else {
    OutputFiles.push(...PrivateFiles);
  }

  OutputFiles.forEach(copyTemplate);
};

