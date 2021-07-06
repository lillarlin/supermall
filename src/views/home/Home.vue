<template>
<div id="home">
   <nav-bar class="home-style">
       <div slot="center">购物街</div>
       </nav-bar>
   <childswiper :banner="banner"></childswiper>
   <recommendview :recommends="recommends"></recommendview>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import childswiper from './childComps/childswiper.vue'
import recommendview from './childComps/RecommendView.vue'
import {getHomeMultidata} from 'network/home.js'


export default {
  components: { 
      NavBar,
    childswiper,
    recommendview
  

   },
   name:'Home',
   data(){
       //用来保存数据，因为一旦箭头函数执行完，那么变量res就会被回收，所以用result这个组件里的变量来保存数据，组件里的变量不会被回收
       return{
          banner:[],
          recommends:[]
       }
   },
   created(){
      //组件创建后，在生命周期函数里发送网络请求,请求数据
       getHomeMultidata().then(res=>{
          console.log(res);
           this.banner=res.data.banner.list
           this.recommends=res.data.recommend.list
       })
 }
}
</script>

<style>
   .home-style{
       background-color: pink;
       color: white;
   }
</style>