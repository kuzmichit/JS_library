/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если 
// при запуске вебпака было указано --mode=production
  mode = 'production';
}

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'source-map',
  mode,

  devServer: {
    hot: true,
    port: 9950,
  },

  plugins: [
    new HtmlWebpackPlugin( {
      template: './src/index.html'
    } ),
 
  ],
  module: {
    rules: [
      { test: /\.(html)$/,
        use: ['html-loader'] 
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "sass-loader",
            options: {
              api: "modern",
              sassOptions: {
                // Your sass options
								// options: {
								// 	sourceMap: true,
								// },
              },
            },
					},
        ],
      },
    ],
  },
};