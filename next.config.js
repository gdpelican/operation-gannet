const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.yml$/,
      type: 'json',
      use: 'yaml-loader'
    })
    return config
  }
})