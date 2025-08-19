const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: false,
  // ⬇️ switch from 'docs' to 'dist' (or remove this line entirely)
  outputDir: 'dist',
  publicPath: '/Georgia-guide/',
  productionSourceMap: true,
  configureWebpack: config => {
    config.plugins = [
      ...(config.plugins || []),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      })
    ];
    config.optimization = {
      runtimeChunk: true,
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 250000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '-',
        cacheGroups: {
          default: { minChunks: 2, priority: -20, reuseExistingChunk: true },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true
          }
        }
      }
    };
    config.performance = {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000
    };

    return {
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'postcss-loader',
              {
                loader: 'sass-loader',
                options: {
                  additionalData: `@import './src/styles/variables.scss';`
                }
              }
            ]
          }
        ]
      },
      resolve: {
        plugins: [
          new TsconfigPathsPlugin({
            extensions: ['.js', '.ts', '.css', '.scss']
          })
        ]
      }
    };
  }
});
