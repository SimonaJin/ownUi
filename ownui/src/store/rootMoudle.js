import logger from "vuex/dist/logger";
import persists from "./persists";
import { getSlider } from "../api/index.js";
import * as types from "./actions-types";
export default {
  // 内部创建一个vue实例
  plugins: [persists, logger()],
  state: {
    // 组件的状态
    sliders: []
  },
  getters: {
    // 获取 计算属性 new Vue(computed) 依赖 当依赖的值变化会重新执行
  },
  mutations: {
    //vue中的方法 唯一可以改状态方法
    [types.SET_SLIDERS](state, payload) {
      //同步
      state.sliders = payload;
    }
  },
  actions: {
    //异步
    async [types.SET_SLIDERS]({ commit }) {
      let data = await getSlider();
      commit(types.SET_SLIDERS, data);
    }
  }
};
