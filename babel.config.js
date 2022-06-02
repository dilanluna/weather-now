module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@screens': './src/screens',
            '@features': './src/features',
            '@constants': './src/constants',
            '@components': './src/components',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  };
};
