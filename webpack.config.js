//entry -> what is the file to start
//output -. need to have absolute path, where you want to save your bundle.js file

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => { //"build:prod": "webpack -p --env production", kiyana eka run karanakota me function eka 
    //thama call wenne, production kiyana eka thama env kiyana parameter ekata set wennne
    console.log('env: ', env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                }, {
                    test: /\.s?css$/, //? allows the s optional and we can operate css and scss files
                    use: CSSExtract.extract({//We tell to the webpack, when you see these stuff extract it
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]//node modules wala dala tyna package wala css file tikath ekka aragena thama me 
                        //bundle tika hadannee
                    })
                    // [//use allows us to put multiple loaders in our rule
                    //     'style-loader',//handles the actual inlining of the styles
                    //     'css-loader',
                    //     'sass-loader'
                    // ]
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',//peoduction nam,
        //meka source-map eken thama build wenne, wadi welawak yanawa but size eka adu wenawa
        devServer: {//dev server eke tyna onama ekak me object eketa danna plwan
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
