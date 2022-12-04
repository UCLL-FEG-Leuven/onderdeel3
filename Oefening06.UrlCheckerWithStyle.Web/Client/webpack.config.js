// webpack.config.js 
module.exports = { 
  entry: { 
    bundle: './src/index.js' 
  },
  output: {
    filename: '../Public/bundle.js'
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
