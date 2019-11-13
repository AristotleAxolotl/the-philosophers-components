const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = ({ mode }) => ({
  mode: 'development',
  entry: join(__dirname, 'demo', 'container.js'),
        plugins: [
            new HtmlWebpackPlugin({
                template: './demo/index.html'
            }),
            new CopyWebpackPlugin([
                {
                    context: 'node_modules/@webcomponents/webcomponentsjs',
                    from: '**/*.js',
                    to: 'webcomponents'
                }
            ]),
        ],
        devtool: mode === 'development' ? 'source-map' : 'none',
        output: {
          path: resolve(__dirname, 'demo'),
          filename: 'tcp.bundle.js'
        }
    });