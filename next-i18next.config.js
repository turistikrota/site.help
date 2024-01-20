/** @type {import('next-i18next').UserConfig} */
const i18n = {
  defaultLocale: 'tr',
  locales: ['en', 'tr'],
  domains: [
    {
      domain: 'help.turistikrota.com',
      defaultLocale: 'en',
      http: true,
      locales: ['en'],
    },
    {
      domain: 'yardim.turistikrota.com',
      defaultLocale: 'tr',
      http: true,
      locales: ['tr'],
    },
  ],
  localeDetection: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  debug: false,
}

module.exports = { i18n }
