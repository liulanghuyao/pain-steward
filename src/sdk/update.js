import http from '../utils/http.js';
import utils from '../utils';

function muiUpdate() {
  const url = 'app/appversion/list';
  plus.runtime.getProperty(plus.runtime.appid, function(inf) {
    let ver = inf.version;
    let client;
    let ua = navigator.userAgent.toLowerCase();
    http.get(url, {
      version: ver
    }).then(data => {
      if (data.list) {
        let version = data.list[0];
        if (version.versionNum != inf.version) {
          if (/android/.test(ua)) {
            mui.confirm('检查更新', '发现新版本，是否更新', ['确定', '取消'], function(e) {
              if (e.index == 0) {
                downWgt(version.androidUrl);
              } else {
                //plus.runtime.quit();
              }
            })
          }
        }
      }
    })
  });

  function downWgt(wgtUrl) {
    plus.nativeUI.showWaiting("下载更新资源中...");
    plus.downloader.createDownload(wgtUrl, {
      filename: "_doc/update/"
    }, function(d, status) {
      if (status == 200) {
        installWgt(d.filename); // 安装wgt包  
      } else {
        plus.nativeUI.alert("下载资源文件失败！");
      }
      plus.nativeUI.closeWaiting();
    }).start();
  }

  // 更新应用资源  
  function installWgt(path) {
    plus.nativeUI.showWaiting("安装资源文件中...");
    plus.runtime.install(path, {}, function() {
      plus.nativeUI.closeWaiting();
      plus.nativeUI.alert("应用资源更新完成！", function() {
        plus.runtime.restart();
      });
    }, function(e) {
      plus.nativeUI.closeWaiting();
      plus.nativeUI.alert("安装资源文件失败");
    });
  }
}

// api更新
function apiUpdate() {
  const url = 'app/appversion/list';
  http.get(url, {
    version: api.version
  }).then(data => {
    if (data.list) {
      let ver = data.list[0];
      if (ver.versionNum != api.version) {
        api.confirm({
          title: '检查更新',
          msg: '发现新版本，是否更新',
          buttons: ['确定', '取消']
        }, function(ret, err) {
          var index = ret.buttonIndex;
          if (index == 1) {
            if (api.systemType == 'android') {
              downApp(ver.androidUrl);
            } else if (api.systemType == 'ios') {

            }
          } else {

          }
        })
      }
    }
  });

  function downApp(url) {
    let savePath = 'fs://app/' + utils.getFileNameR(url);
    api.download({
      url: url,
      savePath: savePath,
      allowResume: true
    }, function(ret, err) {
      if (ret.state == 1) {
        installApp(ret.savePath);
      }
      if (err) {
        api.alert({
          title: '提示',
          msg: '下载资源文件失败',
          buttons: ['确定']
        });
      }
    });
  }

  function installApp(url) {
    api.installApp({
      appUri: url
    });
  }
}

export default {
  muiUpdate,
  apiUpdate
}
