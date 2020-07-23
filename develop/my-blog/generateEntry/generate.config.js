"use strict";
const fs = require("fs");
const path = require("path");

const __root = process.cwd();
const pagesDir = path.resolve(__root, "./src/views");
const allChildFiles = (() => {
    try {
        return fs.readdirSync(pagesDir);
    } catch (e) {
        return [];
    }
})();
const fileNames = [];
for (let name of allChildFiles) {
    fileNames.push(name.replace(/\.[^/.]+$/, "/index.html"));
}
module.exports = {
    useHistory: true,
    fileNames: fileNames
};
