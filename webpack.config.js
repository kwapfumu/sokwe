const webpackConfig = function webpackConfig(env) { // env
  // eslint-disable-next-line global-require
  return require(`./webpackConfig/webpack.config.${env}.js`)({ env: env });
};
module.exports = webpackConfig;
