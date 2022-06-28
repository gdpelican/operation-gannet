module.exports = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home']
  },
  loadLocaleFrom: (lang, ns) => import(`./locales/${lang}/${ns}.yml`).then(m => m.default),
}