const path = require('path');
const generateEntry = require("./generateEntry/generateEntry");
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    outputDir: "./dist",
    publicPath: process.env.NODE_ENV === "production" ? "../" : "/",
    configureWebpack: config => {
        const { htmlToBeInsert } = generateEntry();
        config.plugins = [
            ...config.plugins, 
            ...htmlToBeInsert,
            new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: path.join(__dirname, './src/components/skeleton/entry.js'),
                    },
                },
                minimize: true,
                quiet: true,
            })
        ];
    },
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
    transpileDependencies: [],
    filenameHashing: false
};
