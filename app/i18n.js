/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import brLocaleData from 'react-intl/locale-data/br';

import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import brTranslationMessages from './translations/br.json';

addLocaleData(brLocaleData);

export const appLocales = [
  'br',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, brTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  br: formatTranslationMessages('br', brTranslationMessages),
};
