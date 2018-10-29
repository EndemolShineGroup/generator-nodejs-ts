export default (filterString: string) => {
  return (fileName: string) => {
    return !fileName.includes(filterString);
  };
};
