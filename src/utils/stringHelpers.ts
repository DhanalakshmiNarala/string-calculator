export const findDelimiter = (str: string): string => {
  if (str.includes(',')) {
    return ',';
  }

  if (str.includes('\n')) {
    return '\n';
  }
  return '';
};
