module.exports = {
    entry: {
        newListEntry: './pages/NewListEntryTest.jsx'
    },
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }

};