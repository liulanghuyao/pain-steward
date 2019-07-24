import http from './http.js';
import store from '../store';
import storage from './storage.js'

/**
 * 获取uuid
 */
function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

/**
 * 去除html标签
 */
function removeHtml(str = '') {
  str = str.replace(/<style[\S\s]+style>/ig, '');
  return str.replace(/<[^>]+>/g, "");
}

/**
 * @param {Object} str
 * 字符串转时间
 */
function strToDate(str) {
  let date = str.substring(0, 19);
  date = date.replace(/-/g, '/');
  return new Date(date);
}

// 时间转字符串
function formatDate(date, fmt) {
  date = date == undefined ? new Date() : date;
  if (typeof date === 'number') {
    date = new Date(date);
  } else if (typeof date === 'string') {
    date = strToDate(date);
  }
  fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
  let obj = {
    'y': date.getFullYear(), // 年份，注意必须用getFullYear
    'M': date.getMonth() + 1, // 月份，注意是从0-11
    'd': date.getDate(), // 日期
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'w': date.getDay(), // 星期，注意是0-6
    'H': date.getHours(), // 24小时制
    'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    'm': date.getMinutes(), // 分钟
    's': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  };
  let week = ['天', '一', '二', '三', '四', '五', '六'];
  for (let i in obj) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), function(m) {
      let val = obj[i] + '';
      if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
      for (let j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
      return m.length == 1 ? val : val.substring(val.length - m.length);
    });
  }
  return fmt;
}

/**
 * @param {Object} data
 * 判断是否为空
 */
function isEmpty(data) {
  if (typeof data == "undefined" || data == null || data == undefined || data == "" || data == "null" ||
    data == "undefined") {
    return true;
  } else {
    return false;
  }
}

// 手机正则
function regPhone(phone) {
  var regPhone = /^0?1[3-9][0-9]\d{8}$/;
  return regPhone.test(phone);
}

// 隐藏中间四位
function hidePhone(phone) {
  return phone.replace(/\d{4}(?=\d{4}$)/, '****')
}

// 获取文件名称
function getFileName(url) {
  if (url) {
    let urls = url.split('\\');
    return urls[urls.length - 1];
  }
}

// 获取文件名称
function getFileNameR(url) {
  if (url) {
    let index = url.lastIndexOf("\/");
    return url.substring(index + 1, url.length);
  }
}

// 设置文件路径
function setFileUrl(url) {
  if (url) {
    let urls = url.split('\\');
    if (urls[urls.length - 2] == 'img') {
      return `${http.baseUrl}image/${urls[urls.length-1]}`;
    } else if (urls[urls.length - 2] == 'document') {
      return `${http.baseUrl}${urls[urls.length-2]}/${urls[urls.length-1]}`;
    }
  }
}

// 生成随机数
function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}

// 设置缓存
function setCache(url, data) {
  storage.setItem(`${store.getters['route/getRoute'].path}${store.getters['route/getQuery']}:${url}`, data);
}

// 打开文件
function openFile(url) {
  store.dispatch('loading/show');
  if (window.plus) {
    var dtask = plus.downloader.createDownload(url, {
      filename: '_doc/',
    }, function(d, status) {
      // 下载完成
      if (status == 200) {
        plus.runtime.openFile(d.filename, {}, function(e) {});
      }
      store.dispatch('loading/hide');
    });
    dtask.start();
  } else if (window.api) {
    let savePath = 'fs://doc/' + getFileNameR(url);
    api.download({
      url: url,
      savePath: savePath,
      cache: true,
      networkTypes: 'all'
    }, function(ret, err) {
      if (ret.state == 1) {
        store.dispatch('loading/hide');
        let docReader = api.require('docReader');
        docReader.open({
          path: ret.savePath,
          autorotation: false
        }, function(ret, err) {});
      } else if (ret.state == 2) {
        store.dispatch('loading/hide');
      }
      if (err) {
        store.dispatch('loading/hide');
      }
    });
  }
}

// 删除下载的文件
function deleteDoc() {
  if (window.plus) {
    plus.io.resolveLocalFileSystemURL('_doc', function(entry) {
      entry.removeRecursively(function(entry) {}, function(e) {});
    });
  } else if (window.api) {
    let fs = api.require('fs');
    fs.remove({
      path: 'fs://doc'
    }, function(ret, err) {});
  }
}

// 获取路径后的参数
function getRequest() {
  var url = location.href; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(url.lastIndexOf('?') + 1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

// 设置pushState 点击后退关闭元素
function setState(key, vm) {
  if (key.constructor == String) {
    key = [key];
  }
  key.forEach((e, i) => {
    vm.$watch(e, function(val, oldval) {
      if (val) {
        addState(() => {
          vm[e] = false;
        });
      } else {
        removeState();
      }
    });
  })
}

function addState(fn) {
  history.pushState(null, null, document.URL);
  store.dispatch('route/setPushState', true);
  store.dispatch('route/setPushStateFn', fn);
}

function removeState() {
  history.go(-1);
  store.dispatch('route/setPushState', false);
}

export default {
  removeHtml,
  strToDate,
  formatDate,
  isEmpty,
  getFileName,
  getFileNameR,
  setFileUrl,
  getUUID,
  regPhone,
  hidePhone,
  random,
  setCache,
  openFile,
  deleteDoc,
  getRequest,
  setState,
  addState,
  removeState
}
