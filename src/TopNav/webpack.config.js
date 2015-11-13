module.exports = {
    entry: {
        topnav: './pages/TopNav.jsx'
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