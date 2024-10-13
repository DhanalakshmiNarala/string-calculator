export const findDelimiter = (str: string): string => {
  const delimiterRegex = /^\/\/[^\d]+/;
  if (delimiterRegex.test(str)) {
    return str.charAt(2);
  }

  if (str.includes(',')) {
    return ',';
  }

  if (str.includes('\n')) {
    return '\n';
  }

  return '';
};
