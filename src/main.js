import Vue from 'vue'
//引入MintUi库
import MintUi from 'mint-ui'
//引入mint-css
import "mint-ui/lib/style.css"
//引入路由模块Vue-Router
import VueRouter from 'vue-router'
//引入主页面App.vue
import App from './App.vue'
//引入配置路由js
import RouterConfig from './router/router.config'

//使用MintUi库
Vue.use(MintUi);
//使用路由
Vue.use(VueRouter);
//创建一个路由实例把RouterConfig引入
const router = new VueRouter(RouterConfig);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
