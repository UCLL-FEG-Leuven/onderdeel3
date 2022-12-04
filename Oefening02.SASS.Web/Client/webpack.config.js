// webpack.config.js 
module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '../Public/bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings 
                "css-loader", // translates CSS into CommonJS 
                "sass-loader" // compiles Sass to CSS, using Node Sass 
            ]
        }]
    }
};
