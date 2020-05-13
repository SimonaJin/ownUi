import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import './common/sass/index.scss';// 样式重置
import {dispath,broadcast}from 'js/ui/emitter.js'

import VueLazyload from './common/js/lazyLoad'
Vue.config.productionTip = false;

Vue.prototype.$dispath= dispath;
Vue.prototype.$broadcast= broadcast;



//VueLazyload
var url= window.location.host;
var port =window.location.port;
const loading = `http://${url}:${port}/image/loading.gif`
Vue.use(VueLazyload,{
  preLoad:1.3, // 默认窗口的 1.3倍
  loading
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
