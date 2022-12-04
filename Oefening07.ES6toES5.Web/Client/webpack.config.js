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
               test: /\.(js)$/,
               exclude: /node_modules/,
               use: {
                    loader: 'babel-loader',
               //     options: {
               //         presets: ["es2015"]
               //     }
               }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
};
