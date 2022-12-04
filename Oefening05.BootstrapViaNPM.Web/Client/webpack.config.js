// webpack.config.js 
module.exports = { 
  entry: { 
    bundle: './src/index.js' 
  },
  output: {
    filename: '../public/bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
  }
};
