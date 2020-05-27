import Alert from './alert';
import {initType} from './init'

const Alertbox ={
    install(Vue){
        if(typeof window !=='undefined' && window.Vue){
            Vue= window.Vue
        }
        Vue.component('Alert',Alert)//生成一个组件
        //挂载到原型上 暴露4个方法
        initType(Vue);
    }
}
export default Alertbox;