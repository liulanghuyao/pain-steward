import axios from 'axios';
import Qs from 'qs';
import store from '../store';
import router from '../router';
import storage from './storage';
import {
  Toast
} from 'vant';

let baseUrl = process.env.NODE_ENV === 'production' ? 'http://www.bangche.net/' : '/api/';

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 5000;

const ajax = {
  get: axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    withCredentials: true,
  }),
  post: axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    transformRequest: [data => Qs.stringify(data, {
      arrayFormat: 'brackets'
    })],
    paramsSerializer(params) {
      return Qs.stringify(params, {
        arrayFormat: 'brackets'
      });
    },
    withCredentials: true,
  }),
  postForm: axios.create({
    headers: {
      'Content-Type': 'multipart/form-data; charset=UTF-8',
    },
    withCredentials: true,
  }),
  postJson: axios.create({
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    withCredentials: true,
  }),
  put: axios.create({
    headers: {
      'Content-Type': 'multipart/form-data; charset=UTF-8',
    },
    withCredentials: true,
  })
}

function res(response) {
  store.dispatch('loading/hide');
  if (response.response && response.response.status == 401) { // 401, token失效
    Toast('身份验证已过期，请重新登录');
    store.dispatch('login/logout');
    router.push({
      path: '/login',
      query: {
        back: true
      }
    });
  }
}

/**
 * 发送请求拦截
 */
ajax.get.interceptors.request.use(config => {
  storage.getItem('Authorization') && (config.headers['Authorization'] = storage.getItem('Authorization'));
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * 接收响应拦截
 */
ajax.get.interceptors.response.use(response => {
  res(response);
  return response;
}, error => {
  res(error);
  return Promise.reject(error);
});

/**
 * 发送请求拦截
 */
ajax.post.interceptors.request.use(config => {
  storage.getItem('Authorization') && (config.headers['Authorization'] = storage.getItem('Authorization'));
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * 接收响应拦截
 */
ajax.post.interceptors.response.use(response => {
  res(response);
  return response;
}, error => {
  res(error);
  return Promise.reject(error);
});

/**
 * 发送请求拦截
 */
ajax.postForm.interceptors.request.use(config => {
  storage.getItem('Authorization') && (config.headers['Authorization'] = storage.getItem('Authorization'));
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * 接收响应拦截
 */
ajax.postForm.interceptors.response.use(response => {
  res(response);
  return response;
}, error => {
  res(error);
  return Promise.reject(error);
});

/**
 * 发送请求拦截
 */
ajax.postJson.interceptors.request.use(config => {
  storage.getItem('Authorization') && (config.headers['Authorization'] = storage.getItem('Authorization'));
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * 接收响应拦截
 */
ajax.postJson.interceptors.response.use(response => {
  res(response);
  return response;
}, error => {
  res(error);
  return Promise.reject(error);
});

/**
 * 发送请求拦截
 */
ajax.put.interceptors.request.use(config => {
  storage.getItem('Authorization') && (config.headers['Authorization'] = storage.getItem('Authorization'));
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * 接收响应拦截
 */
ajax.put.interceptors.response.use(response => {
  res(response);
  return response;
}, error => {
  res(error);
  return Promise.reject(error);
});

// get请求
function get(url, params, loading) {
  loading && store.dispatch('loading/show');
  return new Promise((resolve, reject) => {
    if ((!window.api && navigator.onLine) || (window.api && api.connectionType != 'none')) {
      ajax.get.get(url, {
        params
      }).then(({
        data
      }) => {
        if (data && (data.code == 0 || data.rows)) {
          resolve(data);
        } else {
          reject(data);
        }
      }).catch(error => {
        reject(error);
      });
    } else {
      let list = storage.getItem(`${store.getters['route/getRoute'].path}${store.getters['route/getQuery']}:${url}`);
      resolve({
        code: 1,
        list: list,
        currPage: 1,
        totalPage: 1
      });
    }
  });
}

// post 请求
function post(url, data, loading) {
  loading && store.dispatch('loading/show');
  return new Promise((resolve, reject) => {
    if ((!window.api && navigator.onLine) || (window.api && api.connectionType != 'none')) {
      ajax.post.post(url, data).then(({
        data
      }) => {
        if (data && (data.code == 0 || data.rows)) {
          resolve(data);
        } else {
          reject(data);
        }
      }).catch(error => {
        reject(error);
      });
    } else {
      upload(url, data, 'post');
      resolve({
        code: 0
      });
    }
  });
}

// post 请求（上传文件）
function postForm(url, data, loading) {
  loading && store.dispatch('loading/show');
  return new Promise((resolve, reject) => {
    if ((!window.api && navigator.onLine) || (window.api && api.connectionType != 'none')) {
      ajax.postForm.post(url, data).then(({
        data
      }) => {
        if (data && data.code == 0) {
          resolve(data);
        } else {
          reject(data);
        }
      }).catch(error => {
        reject(error);
      });
    } else {
      upload(url, data, 'postForm');
      resolve({
        code: 0
      });
    }
  });
}

// post json请求
function postJson(url, data, loading) {
  loading && store.dispatch('loading/show');
  return new Promise((resolve, reject) => {
    if ((!window.api && navigator.onLine) || (window.api && api.connectionType != 'none')) {
      ajax.postJson.post(url, data).then(({
        data
      }) => {
        if (data && data.code == 0) {
          resolve(data);
        } else {
          reject(data);
        }
      }).catch(error => {
        reject(error);
      });
    } else {
      upload(url, data, 'postJson');
      resolve({
        code: 0
      });
    }
  });
}

// put 请求
function put(url, data, loading) {
  loading && store.dispatch('loading/show');
  return new Promise((resolve, reject) => {
    if ((!window.api && navigator.onLine) || (window.api && api.connectionType != 'none')) {
      ajax.put.put(url, data).then(({
        data
      }) => {
        if (data && (data.code == 0 || data.rows)) {
          resolve(data);
        } else {
          reject(data);
        }
      }).catch(error => {
        reject(error);
      });
    } else {
      upload(url, data, 'put');
      resolve({
        code: 0
      });
    }
  });
}

// 上传数据
function upload(url, data, type) {
  let list = storage.getItem('uploadList') || [];
  let sData = {
    url,
    data,
    type
  };
  list.push(sData);
  storage.setItem('uploadList', list);
  Toast('暂无网络，已保存数据！');
}

export default {
  get,
  post,
  postForm,
  postJson,
  put,
  baseUrl
}
