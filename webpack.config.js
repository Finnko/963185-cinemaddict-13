const path = require(`path`);
const TerserPlugin = require('terser-webpack-plugin');

const isProd = process.argv.indexOf("-p") !== -1;

module.exports = {
  mode: isProd ? `production` : `development`,
  entry: `./src/main.js`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, `public`),
  },
  devtool: !isProd ? `inline-source-map` : false,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    compress: true,
    watchContentBase: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: isProd
      ? [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
      ]
      : [],
  },
};
