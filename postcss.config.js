module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-color-mix'),
    require('postcss-custom-media')({
      importFrom: 'src/styles/css/custom-media.css',
    }),
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'nesting-rules': true,
        'color-mod-function': {
          unresolved: 'warn',
        },
        'custom-properties': {
          preserve: false,
          warnings: true,
        },
      },
    }),
  ],
};
