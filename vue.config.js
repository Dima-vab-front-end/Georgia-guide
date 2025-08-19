const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/<REPO-NAME>/' : '/',
  outputDir: 'dist'
});
