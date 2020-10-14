import App from '@/App'
import Vue from 'vue'
import router from '@/router'

Vue.config.productionTip = false

//全局注册的各种组件, 因为很多地方用到
import TypeNav from "@/components/Type-Nav"  //引入
Vue.component('TypeNav',TypeNav)  //定义带注册


new Vue({
  el:'#app',
  render : h => h(App),
  router,//让所有的组件当中都可以多两个对象  $router  路由器对象  和 $route  路由对象
})