const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devtool: false,
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            phaser: path.resolve(__dirname, 'src/phaser-custom-build/phaser-custom.js')
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            }),
        ],
    },
};
