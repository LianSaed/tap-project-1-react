const path = require('path');

module.exports = {
  entry: './src/index.js',  // Update this with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  // Convert images smaller than 8kb to base64 strings
              name: 'images/[name].[ext]',  // Output images to the 'images' directory
            },
          },
        ],
      },
    ],
  },
};
