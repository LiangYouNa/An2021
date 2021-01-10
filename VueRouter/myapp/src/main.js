import Vue from "vue";
import App from "./App.vue";

import router from "./router/index.js";

// 引入element-ui
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUi);

Vue.config.productionTip = false;

new Vue({
  // 4. 注入根实列
  router,
  render: (h) => h(App),
}).$mount("#app");
