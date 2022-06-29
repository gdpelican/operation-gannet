const withYaml = require('next-plugin-yaml')
const nextTranslate = require('next-translate')

module.exports = withYaml(nextTranslate())