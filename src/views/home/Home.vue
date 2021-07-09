<template>
<div id="home">
   <nav-bar class="home-style">
       <div slot="center">购物街</div>
       </nav-bar>
       <!-- ref 是用于定位元素和取到组件的内容，:是绑定属性 @是绑定方法 -->
   <Scroll class="content" ref="Scroll" 
   :probetype="3"
    @scroll="contentscroll " :pullup="true" @pullingup="loadmore">
       <!-- 把要滚动的内容放进该组件中 -->
       <childswiper :banner="banner"></childswiper>
   <recommendview :recommends="recommends"></recommendview>
   <feature></feature>
   <tab-control :title="['流行','新款','精选']" class="tab-control" @goodsclick='goodschoose'></tab-control>
   <goods-list :goods="showgoods" ></goods-list>
   </Scroll>
    <back-top @click.native="backclick" v-show="isshowbacktop"></back-top>
     <!-- 组件的点击事件 要加上.native-->
</div>
</template>

<script>

import childswiper from './childComps/childswiper.vue'
import recommendview from './childComps/RecommendView.vue'
import feature from './childComps/feature.vue'

import TabControl from 'components/content/tabcontrol/TabControl.vue'
import NavBar from '../../components/common/navbar/NavBar.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import {getHomeMultidata,gethomegoods} from 'network/home.js'
import Scroll from '../../components/common/scorll/Scroll.vue'
import BackTop from '../../components/content/backtop/BackTop.vue'






export default {
  components: { 
      NavBar,
    childswiper,
    recommendview,
   TabControl,
   feature,
    GoodsList,
    Scroll,
    BackTop,
    TabControl
  

   },
   name:'Home',
  
   data(){
       //用来保存数据，因为一旦箭头函数执行完，那么变量res就会被回收，所以用result这个组件里的变量来保存数据，组件里的变量不会被回收
       return{
          banner:[],
          recommends:[],
          goods:{
              //把三个页面的数据都请求下来保存在一个goods对象里面，然后里面的给个对像对应一个分页，其中page用于记录你滑到第几页，这样来加载对应的数据，数据放在list里面
              pop:{page:0,list:[]},
              new:{page:0,list:[]},
              sell:{page:0,list:[]}
          },
           currentindex:'pop',
           isshowbacktop:false
       }
   },
   computed:{
           showgoods(){
               return this.goods[this.currentindex].list
           }
   },
   created(){
      //组件创建后，在生命周期函数里发送网络请求,请求数据
     this.getHomeMultidata()
     this.gethomegoods('pop')
     this.gethomegoods('sell')
     this.gethomegoods('new')
 },
    methods:{
        backclick(){
           this.$refs.Scroll.scrollTo(0,0)
           //this.$refs.Scroll直接进入scroll组件，然后获取里面的方法和属性
        },
        loadmore(){
            //上拉加载更多
            
            this.gethomegoods(this.currentindex)
        },
        contentscroll(position){
            this.isshowbacktop=position.y<-1000
        },
        goodschoose(index){
               switch(index){
                      case 0:this.currentindex='pop'
                      break
                      case 1:this.currentindex='new'
                      break
                      case 2:this.currentindex='sell'
                      
               }
        },
      getHomeMultidata(){
            getHomeMultidata().then(res=>{
          console.log(res);
           this.banner=res.data.banner.list
           this.recommends=res.data.recommend.list
       })
      },
      gethomegoods(type){
         const page=this.goods[type].page+1
          gethomegoods(type,page).then(res=>{
               console.log(res);
               this.goods[type].list.push(...res.data.list)
               this.goods[type].page+=1
               this.$refs.Scroll.finishpullup()
               //push的用法是push(1,2,3),而...num的用法是可以把[1,2,3]一个个读取出来，并以逗号分开
       })
      }
    }
}
</script>

<style>
#home{
    padding-top: 44px; 
   
     height: 100vh;
    position: relative;
    /* 给标题覆盖了图片，加个padding把图片撑下来 */
}
   .home-style{
       background-color: pink;
       color: white;
       position: fixed;
       left: 0;
       right: 0;
       top: 0;
       z-index: 9;
       /* 固定定位脱离标准流，会给覆盖掉，所以要添加优先级 */
       
   }
   .tab-contorl{
       position: sticky;
       top: 44px;
       background-color: white;
   }
   .content{
      position: absolute;
      left: 0px;
      top:44px;
      right: 0;
     
    
      
   }
</style>