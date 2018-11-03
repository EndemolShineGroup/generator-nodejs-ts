/**
 * Replaces a file name prefixed with `_` to a provided replacement, or `.` by
 * default
 * @param fileName
 * @param replacement
 */
export default (fileName: string, replacement: string = '.'): string => {
  return fileName.replace(/^_|\b_/g, replacement);
};
