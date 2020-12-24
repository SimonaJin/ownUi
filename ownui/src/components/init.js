import Alert from "./alert/alert";
import Loading from "./loading/loading";
import initAlert from "./alert/init";
import initLoading from "./loading/init";

export const Alertbox = {
  install(Vue) {
    if (typeof window !== "undefined" && window.Vue) {
      Vue = window.Vue;
    }
    Vue.component("Alert", Alert); //生成一个组件
    //挂载到原型上 暴露4个方法
    initAlert(Vue);
  }
};
export const Loadingbox = {
  install(Vue) {
    if (typeof window !== "undefined" && window.Vue) {
      Vue = window.Vue;
    }
    Vue.component("Loading", Loading); //生成一个组件
    //挂载到原型上 暴露4个方法
    initLoading(Vue);
  }
};
