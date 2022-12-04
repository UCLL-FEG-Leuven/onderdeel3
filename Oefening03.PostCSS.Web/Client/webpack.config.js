// Met de MiniCssExtractPlugin kan je de verwerkte CSS exporteren (extracten) naar aparte CSS bestanden.
// Dat wordt vaak gebruik als een applicatie naar 'productie' gaat, maar nu is het ook handig om snel te zien welke aanpssingen de postcss heeft gedaan.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'], // style-loader weggelaten: niet compatibel met extract plugin
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../Public/[name].css',
            chunkFilename: '../Public/[name].css'
        }),
    ]
}