// ["transform-remove-console", {
//   "exclude": ["error", "warn"]
// }]
module.exports = {
  "presets": [['@babel/preset-env', {
    modules: false,
    useBuiltIns: 'entry'
  }],
    "minify"
  ],
  "plugins": [
    "@babel/plugin-transform-async-to-generator"
  ]
}