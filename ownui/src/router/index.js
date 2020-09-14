import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [];
//获取文件 
const files = require.context('./',false,/\.router.js$/);

files.keys().forEach(key => {
  routes.push(...files(key).default)
});
const router = new VueRouter({
  // mode:'history',
  routes
});
router.beforeEach((to,from,next)=>{
  console.log(123)
})
export default router;
