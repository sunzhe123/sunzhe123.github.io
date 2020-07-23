import path from "path";
/**
 * 获取baseUrl 比如: http://sunzhe123.github.io/my-blod/index.html, 最后我要得到: /my-blod
 */
export function getBaseUrl() {
    console.log("--hrefStr:", hrefStr);
    console.log("--path.dirname(hrefStr):", path.dirname(hrefStr));
    let hrefStr = window.location.pathname; // 得到/my-blod/index.html
    let baseUrl = "/";
    if (/\/$/.test(hrefStr)) {  // 如果是以'/'为结尾的  拼接一个index.html
        hrefStr += "index.html";
    }
    console.log("--hrefStr:", hrefStr);
    console.log("--path.dirname(hrefStr):", path.dirname(hrefStr));
    baseUrl = path.dirname(path.dirname(hrefStr)); // 得到: /my-blod
    return baseUrl;
}

/**
 * 获得当前地址栏传递参数
 * @returns {null}
 */
export function getUrlString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURIComponent(window.location.search).substr(1).match(reg);
    if (r != null) return r[2];
    return null;
}