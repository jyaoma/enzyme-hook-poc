module.exports = {
  "env": { "test": { "plugins": ["babel-plugin-transform-es2015-modules-commonjs"] } },
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "10"
        }
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
