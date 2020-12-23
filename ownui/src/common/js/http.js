import axios from "axios";
import router from "../../router/index";
//axios 基本配置
axios.defaults.timeout = 35000; //超时描述
axios.defaults.withCredentials = true; //允许请求带cookie

//axios request请求拦截
axios.interceptors.request.use(
  config => {
    config.headers.common["Accept"] = "application/*";
    config.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded;charset=utf-8";
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//axios 响应拦截
axios.interceptors.response.use(
  res => {
    //处理异常登录
    if (res.data.retcode === 10) {
      //清缓存
      sessionStorage.clear();
      localStorage.clear();
      //异常提示
      //跳转至登录页
      router.push({ name: "login" });
    } else {
      return res;
    }
  },
  err => {
    //超时拦截
    if (err.message.includes("timeoout")) {
      err.response = "timeout";
      // 超时处理 ，超时页面+刷新

      //超时提示
    }
    //各种状态码，处理
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          break;
      }
    } else {
      err.response = "链接服务器失败";
    }
    return Promise.reject(err.response);
  }
);
export default axios;
//axios请求封装
function get(url, params) {
  return new Promise(function(resolve, reject) {
    axios
      .get(url, { params: params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export const http = {
  get: function(url, data) {
    return get(url, data);
  }
};
