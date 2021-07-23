import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common//toast/index.js'
//toast就是obj
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(toast)
//使用use就会去调用该对象的install
//定义一个事件总线
new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')

