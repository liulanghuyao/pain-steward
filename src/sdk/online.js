import storage from '../utils/storage';
import http from '../utils/http';
import {
  Toast
} from 'vant';

window.ononline = function() {
  let list = storage.getItem('uploadList');
  let numb = 0;
  if (list && list.length) {
    list.forEach((e, i) => {
      http[e.type](e.url, e.data).then(data => {

      });
      if (i == list.length - 1) {
        Toast('网络回归，上传数据成功！');
        storage.removeItem('uploadList');
      }
    });
  }
}
