
// 解析url参数，返回obj对象
export function getUrlParamObj(url) {
    var url = decodeURIComponent(url || location.search);
    if(url.length < 1 || !/\?/.test(url)) return {};
    var result = {};
    var arr = url.slice( url.indexOf('?') + 1 ).split("&");
    for(var i=0; i<arr.length; i++){
        var temp = arr[i].split("=");
        result[temp[0]] = temp[1];
    }
    return result;
}