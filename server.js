var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./hot.webpack.config');
var path = require('path');

const port = 3007;

new WebpackDevServer(webpack(config), {
    contentBase: path.join(process.cwd(), '/static/'),
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at localhost: ${port}`);
});
