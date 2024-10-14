import { COMMA, NEWLINE } from '../constants/delimiters';

export const findDelimiter = (str: string): string => {
  const customDelimiter = /^\/\/[^\d]+\n/;
  if (customDelimiter.test(str)) {
    return str.charAt(2);
  }

  return findDefualtDelimiter(str);
};

const findDefualtDelimiter = (str: string): string => {
  if (str.includes(COMMA)) return COMMA;
  if (str.includes(NEWLINE)) return NEWLINE;
  return '';
};
