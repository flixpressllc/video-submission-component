import { nestedPropertyDetails } from 'happy-helpers';
import * as languages from '../../../utils/i18n';

let currentLanguage = 'english';

export default function i18n(params: string[] | string): string {
  const [stringPath] = [].concat(params);
  return findString('english', stringPath);
}

export function setI18nLanguage(language: string) {
  const i18nLookup = languages[language.toLowerCase()];
  if (!i18nLookup) {
    console.error('No lookup file for ' + language); // tslint:disable-line no-console
    return;
  }
  currentLanguage = language.toLowerCase();
}

function findString(language: string, stringPath: string): string {
  const i18nLookup = languages[language];
  const {exists, existingPath, finalValidProperty} = nestedPropertyDetails(i18nLookup, stringPath);
  if (exists) {
    return finalValidProperty;
  } else {
    console.warn('No i18n string could be found for ' + stringPath); // tslint:disable-line no-console
    return stringPath;
  }
}
