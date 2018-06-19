import { nestedPropertyDetails } from 'happy-helpers';

let textLookup: object;

export default function textFor(params: string[] | string): string {
  const [stringPath] = [].concat(params);
  return findString(stringPath);
}

export function setText(textBundle: string | object) {
  if (typeof textBundle === 'string') {
    textLookup = JSON.parse(textBundle);
  } else {
    textLookup = textBundle;
  }
}

function findString(stringPath: string): string {
  if (!textLookup || stringPath === undefined) { return ''; }
  const {exists, existingPath, finalValidProperty} = nestedPropertyDetails(textLookup, stringPath);
  if (exists) {
    return finalValidProperty;
  } else {
    console.warn('No string could be found for ' + stringPath); // tslint:disable-line no-console
    return '';
  }
}
