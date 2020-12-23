import { iconType } from "common/js/ui/config.js";
class alertMsg {
  constructor(duration) {
    this.duration = duration;
    this.text = null;
    this.vm = null;
  }
  meessage(Vue, iconType, text, cb) {
    this.dealText(text);
    this.extend(Vue, iconType, cb);
  }
  //处理对象
  dealText(text) {
    if (typeof text == "string") {
      this.text = text;
    } else if (text instanceof Object) {
      this.text = text.text || "";
      if (text.duration) {
        this.duration = text.duration;
      }
    }
  }
  //注册
  extend(Vue, iconType, cb) {
    let msg = this.text;
    let VueAlertBox = Vue.extend({
      render(h) {
        let props = {
          iconType,
          text: msg,
          show: this.show
        };
        return h("alert", { props });
      },
      data() {
        return { show: false };
      }
    });
    //新建实例
    let newAlert = new VueAlertBox();
    //手动挂载
    this.vm = newAlert.$mount();
    //把实例插入到body
    let el = this.vm.$el;
    document.body.appendChild(el);
    this.vm.show = true;
    this.hiddenDom(newAlert, el, cb);
  }
  //隐藏
  hiddenDom(newAlert, el, cb) {
    let hidAlert = setTimeout(() => {
      clearTimeout(hidAlert);
      this.vm.show = false;
      document.body.removeChild(el);
      newAlert.$destroy();
      this.vm = null;
      cb && typeof cb === "function" && cb();
    }, this.duration);
  }
}
//挂载alert方法
export function initType(Vue) {
  //挂载到原型上 暴露4个方法
  let vm = Vue;
  let alertProtype = (vm.prototype.$alert = {});
  Object.keys(iconType).forEach(item => {
    alertProtype[item] = function(text, cb) {
      if (!text) return;
      let newAlert = new alertMsg(3500);
      newAlert.meessage(vm, item, text, cb);
    };
  });
}
