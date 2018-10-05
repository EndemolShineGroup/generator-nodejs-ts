import Generator from 'yeoman-generator';
import EndemolGenerator from '.';

export type FixedGenerator = Generator & { answers: Generator.Answers };

// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = [
  // Node
  'package.json',
  '_nvmrc',
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
  '_gitignore',
  '_github/PULL_REQUEST_TEMPLATE.md',
  '_github/ISSUE_TEMPLATE/bug_report.md',
  '_github/ISSUE_TEMPLATE/feature_request.md',
  '_github/ISSUE_TEMPLATE/documentation_improvement.md',
  // Git Hooks and Tools
  '_czrc',
  '_huskyrc',
  '_commitlintrc.js',
  '_lintstagedrc.yml',
  // Code Tools
  '_editorconfig',
  // src
  'src/index.ts',
];

export const PublicFiles: string[] = [
  '_codeclimate.yml',
  '_travis.yml',
  '_releaserc',
  'LICENSE',
];

export const PrivateFiles: string[] = ['buildspec.yml'];

export const replaceTemplatePrefix = (
  path: string,
  replacement: string = '.',
): string => {
  return path.replace(/^_|\b_/g, replacement);
};

export default (gen: FixedGenerator) => {
  let OutputFiles: string[] = [...Files];

  const copyTemplate = (path: string) => {
    let replacedPath = replaceTemplatePrefix(path);

    gen.fs.copyTpl(
      gen.templatePath(path),
      gen.destinationPath(replacedPath),
      gen.answers,
    );
  };

  if (gen.answers.isPublic) {
    OutputFiles.push(...PublicFiles);
  } else {
    OutputFiles.push(...PrivateFiles);
  }

  OutputFiles.forEach(copyTemplate);
};
