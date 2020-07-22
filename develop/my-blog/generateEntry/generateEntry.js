// use to generate entry and HtmlWebpackPlugin for webpack
"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectConfig = require("./generate.config");

module.exports = () => {
    const __root = process.cwd();
    let { useHistory, fileNames } = projectConfig;
    useHistory = typeof useHistory !== "boolean" ? false : useHistory;
    fileNames = Array.isArray(fileNames) ? fileNames : [];
    let htmlToBeInsert = [];
    if (useHistory) {
        fileNames.map(fileName => {
            if (fileName !== "/") {
                htmlToBeInsert.push(
                    new HtmlWebpackPlugin({
                        template: path.resolve(__root, "./public/index.html"),
                        filename: path.resolve(__root, `dist/${fileName}`),
                        cache: false,
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true
                        }
                    })
                );
            }
        });
    }
    return {
        htmlToBeInsert
    };
};
