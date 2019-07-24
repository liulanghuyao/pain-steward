import utils from '../utils';
import store from '../store';

function muiBack(vue) {
  // //处理逻辑：1秒内，连续两次按返回键，则退出应用；
  let first = null;
  mui.init({
    keyEventBind: {
      backbutton: true //关闭back按键监听
    },
    beforeback: () => {
      //首次按键，提示 再按一次退出应用
      if (history.length < 1 || vue.$route.meta.quit) {
        quit();
        return false;
      } else {
        return true;
      }
    }
  });

  function quit() {
    if (!first) {
      first = new Date().getTime(); //记录第一次按下回退键的时间
      mui.toast("再按一次退出应用"); //给出提示
      setTimeout(() => {
        //2s中后清除
        first = null;
      }, 2000);
    } else {
      if (new Date().getTime() - first < 2000) {
        utils.deleteDoc();
        //如果两次按下的时间小于2s，
        plus.runtime.quit(); //那么就退出app
      }
    }
  }
}

function apiBack(vue) {
  api.setStatusBarStyle({
    style: 'dark',
    color: '#ffffff'
  });
  var timer = 0;

  function back(currentTime) {
    if ((currentTime - timer) > 2000) {
      timer = currentTime
      api.toast({
        msg: '再按一次返回键退出app',
        duration: 2000,
        location: 'bottom'
      })
    } else {
      utils.deleteDoc();
      api.closeWidget({
        id: api.appId, //这里改成自己的应用ID
        retData: {
          name: 'closeWidget'
        },
        silent: true
      })
    }
  }

  api.addEventListener({
    name: 'keyback'
  }, function(ret, err) {
    var currentTime = +new Date();
    if (vue.$route.meta.quit) {
      back(currentTime)
    } else {
      api.historyBack(function(ret, err) {
        if (!ret.status) {
          back(currentTime)
        }
      })
    }
  });
}

window.addEventListener('popstate', function() {
  if (store.getters['route/getPushState']) {
    history.pushState(null, null, document.URL);
    store.getters['route/getPushStateFn']();
  }
});

export default {
  muiBack,
  apiBack
}
