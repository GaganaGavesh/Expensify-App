//entry -> what is the file to start
//output -. need to have absolute path, where you want to save your bundle.js file

const path = require('path');

//console.log(path.join(__dirname,'public'));//gives the absolute path to the current directory

//expose object to another file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',//babel-loader allows run babel under certain conditions
                test: /\.js$/,//only files meet this condition run babel through them and convert jsx in to js es5
                exclude: /node_modules///node-modules eka production mode eke tynne api ewage monawath wenas karanne ne
            },{
                test: /\.s?css$/, //? allows the s optional and we can operate css and scss files
                use: [//use allows us to put multiple loaders in our rule
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer: {//dev server eke tyna onama ekak me object eketa danna plwan
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}