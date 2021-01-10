import Vue from "vue";

//  1.引入
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Reg from "../views/Reg.vue";
import Discover from "../views/Discover.vue";
import Cart from "../views/Cart.vue";

//  2.使用
Vue.use(VueRouter);
//  3.配置
const router = new VueRouter({
  // 路由配置
  routes: [
    {
      // 当浏览器地址为/Home时，渲染Home组件的内容
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/reg",
      component: Reg,
    },
    {
      path: "/discover",
      component: Discover,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});

export default router;
