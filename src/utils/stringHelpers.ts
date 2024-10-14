import { COMMA, NEWLINE } from '../constants/delimiters';

export const findDelimiter = (str: string): string | string[] => {
  const multipleDelimiters = /^\/\/\[(\D+)\]\[(\D+)\]\n/;
  let match = str.match(multipleDelimiters);
  if (match != null) {
    return [match[1], match[2]];
  }

  const customMultipleDelimiter = /^\/\/\[(\D+)\]\n/; // Ex: //[***]\n
  match = str.match(customMultipleDelimiter);
  if (match != null) {
    return match[1];
  }

  const customSingleDelimiter = /^\/\/\D+\n/; // Ex: //;\n
  if (customSingleDelimiter.test(str)) {
    return str.charAt(2);
  }

  return findDefualtDelimiter(str);
};

const findDefualtDelimiter = (str: string): string => {
  if (str.includes(COMMA)) return COMMA;
  if (str.includes(NEWLINE)) return NEWLINE;
  return '';
};
