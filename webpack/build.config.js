var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = require('./vendor.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

    return {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        keep_fnames: true
                    }
                })
            ],
        },
        entry: {
            vendor: VENDOR_LIBS,
            bundle: './src/app.module.js',    
        },
        output: {
            path: __dirname + '/../dist',
            filename: '[name].[hash].js'
        },
        module: {
            rules: [
                {
                    test: /\.(scss)$/,
                    use: [{
                    loader: 'style-loader', // inject CSS to page
                    }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function () { // postcss plugins, can be exported to postcss.config.js
                        return [
                            require('autoprefixer')
                        ]
                        }
                    }
                    }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                    }]
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                        loader: 'style-loader', // creates style nodes from JS strings
                        },
                        {
                        loader: 'css-loader', // translates CSS into CommonJS
                        },
                        {
                        loader: 'less-loader', // compiles Less to CSS
                        },
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                        loader: 'style-loader', // creates style nodes from JS strings
                        },
                        {
                        loader: 'css-loader', // translates CSS into CommonJS
                        }
                    ],
                    include: /node_modules/
                },
                { 
                    test: /\.(jp?g|png|gif|svg)$/i,
                    loader: "file-loader",
                    options: {
                        name : '[name].[ext]',
                        outputPath: 'assets/img',
                        publicPath: 'assets/img',
                        esModule: false
                    }    
                },
                { 
                    test: /\.(eot|ttf|woff|woff2)$/, 
                    loader: "file-loader",
                    options: {
                        name :'[name].[ext]',
                        outputPath: 'fonts',
                        publicPath: 'fonts'
                    }  
                },
                {
                    test: /\.html$/,
                    use: ['ng-cache-loader?prefix=view/'],
                    exclude: /\index.html$/
                
                },
                {
                    test: require.resolve('jquery'),
                    use: [
                        {
                            loader: 'expose-loader',
                            options: 'jQuery'
                        },
                        {
                            loader: 'expose-loader',
                            options: '$'
                        }
                    ]
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread']
                        }
                    }
                }                  
            ],
        },
        node: {
            console: true,
            fs: 'empty',
            tls: 'empty',
            ws: 'empty'
        },
        plugins: [
            new webpack.ProvidePlugin({
                'window.jQuery': 'jquery',
                $: 'jquery',
                'jQuery': 'jquery'            
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'head',
                base: '/'                 
            })
        ]
    }
};