//自定义一个插件
import Toast from './Toast.vue'
const obj={}
obj.install=function(Vue){
  //1,创建组件构造器
     const toastContrustor=Vue.extend(Toast)
  //2 .new 的方式可以根据组件构造器，创建一个组件对象
  const toast=new toastContrustor()
  //3将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  //5把该对象挂载的vue的原型上
  Vue.prototype.$toast=toast
}
export default obj