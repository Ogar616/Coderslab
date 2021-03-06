module.exports = {
    entry: "./js/zadanie05.jsx",
    output: { filename: "./js/out.js" },
    watch: true,
    module: {
        loaders: [ {
            test: /\.jsx$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        }
        ]
    }
};