/**
 * queryURLParams, 获取URL地址栏问好参数信息和HASH值
 * @params
 * url [string]:必传，要解析的URL地址
 * key [string]:必传，要获取哪一个键的属性值，
 * {lx:1,from:'wx',_HASH:'video'}
 * @return
 * 获取的结果，可能是某个具体的属性值，也可能是对象
 */

export function queryURLParams(url, key) {
  //1. 获取问号和#后面的值
  let askIndex = url.indexOf("?"),
    polIndex = url.indexOf("#"),
    askText = "",
    polText = "";
  polIndex === -1 ? (polIndex = url.length) : null;
  polText = url.substring(polIndex + 1);
  askIndex > -1 ? (askText = url.substring(askIndex + 1, polIndex)) : null;

  // 2. 以对象键值对的方式解析结果
  let obj = {};
  polText ? (obj["_HASH"] = polText) : null;
  if (askText) {
    //方法一：
    // let arr = askText.split('&');

    // arr.forEach(item => {
    //     if (item.indexOf('=') === -1) return;
    //     let itemArr = item.split('=');
    //     obj[itemArr[0]]= itemArr[1]
    // })

    //方法二
    let arr = askText.split(/(?:&|=)/g);
    for (let i = 0; i < arr.length; i += 2) {
      let k = arr[i],
        v = arr[i + 1];
      k ? (obj[k] = v) : null;
    }
  }
  return typeof key === "undefined" ? obj : obj[key];
}
//方法三 利用a标签
export function queryURLlink(url, key) {
  let link = document.createElement("a");
  link.href = url;
  let askText = link.search.substring(1),
    polText = link.hash.substring(1);
  let obj = {};
  polText ? (obj["_HASH"] = polText) : null;
  if (askText) {
    let arr = askText.split(/(?:&|=)/g);
    for (let i = 0; i < arr.length; i += 2) {
      let k = arr[i],
        v = arr[i + 1];
      k ? (obj[k] = v) : null;
    }
  }
  link = null;
  return typeof key === "undefined" ? obj : obj[key];
}
// 方法四 全正则匹配
export function queryURL(url, key) {
  let obj = {};
  url.replace(/([^?&=#]+)=([^?&=#]+)/g, (_, $1, $2) => {
    obj[$1] = $2;
  });
  url.replace(/([^?&=#]+)/g, (_, $1) => {
    obj["_HASH"] = $1;
  });
  return typeof key === "undefined" ? obj : obj[key];
}

/**
 * observerEvent, 绑定事件
 * @params
 * element [string]:必传，需要绑定的节点
 * type [string]:必传，需要执行的事件，click,change等
 * func: 必传, 执行的函数
 *
 */
function observerEvent(element, type, func) {
  // 第一次执行observerEvent，根据兼容判断，重构了这个函数
  if (element.addEventListener) {
    observerEvent = function(element, type, func) {
      element.addEventListener(type, func);
    };
  } else if (element.attachEvent) {
    observerEvent = function(element, type, func) {
      element.attachEvent("on" + type, func);
    };
  } else {
    observerEvent = function(element, type, func) {
      element["on" + type] = func;
    };
  }
  // 第一次也需要执行重构后的方法，实现事件绑定
  observerEvent(element, type, func);
}
