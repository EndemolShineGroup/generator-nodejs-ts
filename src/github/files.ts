// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = [
  '_github/PULL_REQUEST_TEMPLATE.md',
  '_github/settings.yml',
  'CODEOWNERS',
];

export const PublicFiles: string[] = [
  '_github/ISSUE_TEMPLATE/bug_report.md',
  '_github/ISSUE_TEMPLATE/feature_request.md',
  '_github/ISSUE_TEMPLATE/documentation_improvement.md',
];

export const PrivateFiles: string[] = [];

export default {
  common: Files,
  private: PrivateFiles,
  public: PublicFiles,
};
