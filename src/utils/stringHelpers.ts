import { COMMA, NEWLINE } from '../constants';

export const findDelimiters = (str: string): string[] => {
  let delimiters = findCustomMultipleDelimiters(str);
  if (delimiters.length) return delimiters;

  delimiters = findCustomSingleDelimiter(str);
  if (delimiters.length) return delimiters;

  return findDefualtDelimiters(str);
};

const findDefualtDelimiters = (str: string): string[] => {
  let delimiters = [];
  if (str.includes(COMMA)) delimiters.push(COMMA);
  if (str.includes(NEWLINE)) delimiters.push(NEWLINE);
  return delimiters;
};

const findCustomSingleDelimiter = (str: string): string[] => {
  const combinedRegex = /^\/\/\[(\D+)\]\n|^\/\/(\D)\n/; // Ex: //[***]\n or //*\n
  let match = str.match(combinedRegex);
  if (match != null) {
    return match[1] ? [match[1]] : [match[2]];
  }
  return [];
};

const findCustomMultipleDelimiters = (str: string): string[] => {
  const multipleDelimiters = /^\/\/\[(\D+)\]\[(\D+)\]\n/; // Ex: //[*][%]\n
  const delimiters: string[] = [];

  let match = str.match(multipleDelimiters);
  if (match != null) {
    if (match[1]) delimiters.push(match[1]);
    if (match[2]) delimiters.push(match[2]);
  }

  return delimiters;
};
