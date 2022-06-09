import en from '../locales/en';
import ca from '../locales/ca';

export default {
  vueI18nLoader: true,
  defaultLocale: 'ca',
  locales: [
    // {
    //   code: 'en',
    //   name: 'English',
    // },
    {
      code: 'ca',
      name: 'Català',
    },
  ],
  strategy: 'no_prefix',
  vueI18n: {
    locale: 'ca',
    fallbackLocale: 'ca',
    messages: {
      en,
      ca,
    },
  },
};
