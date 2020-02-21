/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      },
      autoprefixer: {
        flexbox: 'no-2009'
      }
    })
  ]
}
