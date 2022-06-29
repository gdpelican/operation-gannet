module.exports = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home']
  },
  loadLocaleFrom: (lang, ns) => require(`./locales/${lang}/${ns}.yml`)
}