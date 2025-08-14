const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: false,
  productionSourceMap:
    process.env.VUE_ENVIRONMENT?.toLowerCase() === 'development' ||
    process.env.NODE_ENV?.toLowerCase() === 'development',
  configureWebpack: config => {
    config.plugins = [
      ...(config.plugins || []),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      })
    ];

    if (
      process.env.VUE_ENVIRONMENT?.toLowerCase() === 'development' ||
      process.env.NODE_ENV?.toLowerCase() === 'development'
    ) {
      config.devtool = 'eval-source-map';
      config.optimization = {
        minimize: false
      };
      config.output.devtoolModuleFilenameTemplate = info => {
        const resPath = info.resourcePath;
        const identifier = info.identifier;

        const isVueForVueSource =
          resPath.match(/\.vue$/) &&
          !identifier.match(/type=script/) &&
          !identifier.match(/templateLoader/);

        const isHTMLForVueSource =
          resPath.match(/\.html$/) && !identifier.match(/vue-loader/);

        const isTsForVueSource = resPath.match(/\.ts$/);
        const isSCSSForVueSource = resPath.match(/\.scss$/);
        if (
          isSCSSForVueSource ||
          isTsForVueSource ||
          isHTMLForVueSource ||
          isVueForVueSource
        ) {
          return `a-vue-source:///${resPath.toString().slice(2)}`;
        }

        return `webpack-generated:///${resPath}?${info.hash}`;
      };

      config.output.devtoolFallbackModuleFilenameTemplate =
        'webpack:///[resource-path]?[hash]';
      config.performance = { hints: false };
      config.devServer = {
        client: {
          overlay: false
        },
        host: 'localhost'
      };
    } else {
      // if production
      config.optimization = {
        runtimeChunk: true,
        minimize: true,
        splitChunks: {
          chunks: 'all', // Split chunks for all types of imports (async and sync)
          minSize: 20000, // Minimum chunk size in bytes
          maxSize: 250000, // Maximum chunk size in bytes
          minChunks: 1, // Minimum number of chunks that must share a module before splitting
          maxAsyncRequests: 30, // Maximum number of parallel requests for async chunks
          maxInitialRequests: 30, // Maximum number of parallel requests for initial chunks
          automaticNameDelimiter: '-', // Delimiter for chunk names
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/, // Include third-party libraries
              priority: -10,
              reuseExistingChunk: true
            }
          }
        }
      };

      config.performance = {
        hints: false, // enum
        maxAssetSize: 512000, // int (in bytes),
        maxEntrypointSize: 512000 // int (in bytes)
      };
    }
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
                  additionalData: `
                  @import './src/styles/variables.scss';
                  `
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
