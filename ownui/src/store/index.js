import Vue from 'vue'
import Vuex from 'vuex'
import rootMoudele from './rootMoudle'

Vue.use(Vuex);
const files = require.context('./modules/',false,/\.js$/);
files.keys().forEach(key => {
    //模块对应的内容
    let store = files(key).default;
    //动态添加模块
    let moduleName = key.replace(/^\.\//,'').replace('/\.js$/','');
    let modules= rootMoudele.modules=(rootMoudele.modules || {})
    modules[moduleName] = store;
    modules[moduleName].namespaced= true;
    
});
let store =  new Vuex.Store(rootMoudele)
// 跨组件通信
export default store