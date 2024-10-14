import { COMMA, NEWLINE } from '../constants';

export const getStringDelimiters = (str: string): string[] => {
  let delimiters = getCustomMultipleDelimiters(str);
  if (delimiters.length) return delimiters;

  delimiters = getCustomSingleDelimiter(str);
  if (delimiters.length) return delimiters;

  return getDefualtDelimiters(str);
};

const getDefualtDelimiters = (str: string): string[] => {
  let delimiters = [];
  if (str.includes(COMMA)) delimiters.push(COMMA);
  if (str.includes(NEWLINE)) delimiters.push(NEWLINE);
  return delimiters;
};

const getCustomSingleDelimiter = (str: string): string[] => {
  // For //[delimiter]\n and //delimiter\n type
  const combinedRegex = /^\/\/\[(\D+)\]\n|^\/\/(\D)\n/;
  const match = str.match(combinedRegex);
  if (match != null) {
    return match[1] ? [match[1]] : [match[2]];
  }
  return [];
};

const getCustomMultipleDelimiters = (str: string): string[] => {
  // For //[delim1][delim2]\n type
  const multipleDelimiters = /^\/\/\[(\D+)\]\[(\D+)\]\n/;
  const delimiters: string[] = [];

  let match = str.match(multipleDelimiters);
  if (match != null) {
    if (match[1]) delimiters.push(match[1]);
    if (match[2]) delimiters.push(match[2]);
  }

  return delimiters;
};

export const removeDelimiterPrefixFromString = (str: string): string => {
  return str.replace(/^\/\/.*\n/, '');
};

export const splitDelimiterString = (
  str: string,
  delimiters: string[]
): number[] => {
  delimiters.forEach((delimiter) => {
    str = str.split(delimiter).join(' ');
  });

  return str.split(' ').map(Number);
};
