const buildConfig = function buildConfig(env) {
  return require(`./webpackConfig/webpack.config.${env}.js`)({ env: env });
  // return require('./webpackConfig/webpack.config.dev.js');
};
module.exports = buildConfig;
