import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./common/sass/index.scss"; // 样式重置
// 引入makrdown插件
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import gl_component from "common/js/ui/globalComponent";
import { dispath, broadcast } from "js/ui/emitter.js";

// 组件引入
// import VueLazyload from "./common/js/lazyLoad";
import { Alertbox, Loadingbox } from "components/init";


Vue.config.productionTip = false;

Vue.prototype.$dispath = dispath;
Vue.prototype.$broadcast = broadcast;

//VueLazyload
// var url= window.location.host;
// var port =window.location.port;
// const loading = `http://${url}:${port}/image/loading.gif`
// Vue.use(VueLazyload,{
//   preLoad:1.3, // 默认窗口的 1.3倍
//   loading
// })


Vue.use(Alertbox);
Vue.use(Loadingbox);
Vue.use(gl_component);
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
