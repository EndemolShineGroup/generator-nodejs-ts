export default (path: string, replacement: string = '.'): string => {
  return path.replace(/^_|\b_/g, replacement);
};
