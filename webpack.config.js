module.exports = {
    devtool: 'eval',
    entry: {
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
                loader: 'babel',
                include: path.join(__dirname, 'src')
            }
        ]
    }

};