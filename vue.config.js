const path = require('path');

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)));

    config.plugin('html').tap(args => {
      args[0].minify = false;
      return args;
    });
  },
  devServer: {
    proxy: {
      '/api/v4': {
        target: 'https://flow.postnauka.ru/',
        changeOrigin: true,
        pathRewrite: { '^/api/v4': '/v4' }
      }
    }
  }
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/common/index.styl')]
    });
}
