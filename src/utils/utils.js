// 解析url参数，返回obj对象
export function getUrlParamObj(url) {
  var url = decodeURIComponent(url || location.search);
  if (url.length < 1 || !/\?/.test(url)) return {};
  var result = {};
  var arr = url.slice(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split("=");
    result[temp[0]] = temp[1];
  }
  return result;
}

// 格式化时间
export function formatDate(timeStr) {
  if (!timeStr) return timeStr;

  let diffTime = new Date() - new Date(timeStr);

  if (diffTime / 1000 < 60) {
    return "刚刚";
  } else if (diffTime / 60000 < 60) {
    return parseInt(diffTime / 60000) + "分钟前";
  } else if (diffTime / 3600000 < 24) {
    return parseInt(diffTime / 3600000) + "小时前";
  } else if (diffTime / 86400000 < 31) {
    return parseInt(diffTime / 86400000) + "天前";
  } else if (diffTime / 2592000000 < 12) {
    return parseInt(diffTime / 2592000000) + "月前";
  } else {
    return parseInt(diffTime / 31536000000) + "年前";
  }
}
