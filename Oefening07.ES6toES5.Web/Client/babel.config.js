// babel.config.js
module.exports = api => {
    api.cache(true);
    return {
        plugins: [
            "@babel/plugin-transform-runtime",
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "entry",
                    corejs: 3,
                    targets: {
                        ie:"11"
                    }
                }
            ]
        ]
    }
}