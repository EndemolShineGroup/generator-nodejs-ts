/**
 * Creates a filter function to use in `Array.filter()`
 * @param filterString
 */
export default (filterString: string) => {
  return (fileName: string) => {
    return !fileName.includes(filterString);
  };
};
