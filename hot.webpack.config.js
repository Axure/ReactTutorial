var webpack = require('webpack');

module.exports = {
    entry: {
        hot: 'webpack-dev-server/client?http://localhost:3007/',
        server: 'webpack/hot/only-dev-server',
        page: './src/Card/pages/card.jsx',
        filter: './src/Filter/pages/filter.jsx',
        newListEntry: './src/NewListEntry/pages/NewListEntryTest.jsx',
        topnav: './src/TopNav/pages/TopNav.jsx'
    },
    output: {
        path: __dirname + '/build/',
        publicPath: "/build/",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot!babel'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

};