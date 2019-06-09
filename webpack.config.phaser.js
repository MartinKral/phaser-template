'use strict';

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {    
    mode: 'production',

    entry: {
        'phaser-build': `./phaser-build-setup.js`,
    },

    resolve: {
        alias: {
            eventemitter3: path.resolve(__dirname, './node_modules/eventemitter3'),
        },
        modules: ['node_modules/phaser/src'],
    },

    output: {
        path: `${__dirname}/src/phaser-custom-build`,
        filename: 'phaser-custom.js',
        library: 'Phaser',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
        devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
        umdNamedDefine: true,
    },

    performance: { hints: false },

    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            }),
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
            'typeof EXPERIMENTAL': JSON.stringify(false),
            'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
            'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
        }),

        new CleanWebpackPlugin(),
    ],

    devtool: 'source-map',
};
