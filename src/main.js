import App from '@/App'
import Vue from 'vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render : h => h(App),
  router,//让所有的组件当中都可以多两个对象  $router  路由器对象  和 $route  路由对象
})