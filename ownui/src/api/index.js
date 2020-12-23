import config from "./config/public";
import axios from "../utils/request";

//获取轮播图功能
export const getSlider = () => axios.get(config.getSlider);

// 调用接口：1. 页面中调用 2. vuex获取哦action
// 1）数据是全部的vuex 2）可以服用的也可以放到vuex中 3）需要加缓存
