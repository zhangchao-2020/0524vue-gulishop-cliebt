import App from '@/App'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render : h => h(App)
})