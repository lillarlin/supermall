<template>
<div id="home">
   <nav-bar class="home-style">
       <div slot="center">购物街</div>
       </nav-bar>
        <tab-control :title="['流行','新款','精选']" class="tab-control" @goodsclick='goodschoose' ref="tabcontrol1" v-show="istabshow"></tab-control>
       <!-- ref 是用于定位元素和取到组件的内容，:是绑定属性 @是绑定方法 -->
   <Scroll class="content" ref="Scroll" 
   :probetype="3"
    @scroll="contentscroll " :pullup="true" @pullingup="loadmore">
       <!-- 把要滚动的内容放进该组件中 -->
       <childswiper :banner="banner" @swiperimageload="loadswiperimage"></childswiper>
   <recommendview :recommends="recommends"></recommendview>
   <feature></feature>
   <tab-control :title="['流行','新款','精选']" class="tab-control" @goodsclick='goodschoose' ref="tabcontrol2"></tab-control>
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
           isshowbacktop:false,
           tabcontroloffsettop:0,
           istabshow:false,
           locate:0
       }
   },
   computed:{
           showgoods(){
               return this.goods[this.currentindex].list
           }
         
   },
     activated(){
                this.$refs.Scroll.refresh()
                this.$refs.Scroll.scrollTo(0,this.locate,10)
                
           },
           deactivated(){
              this.locate=this.$refs.Scroll.scroll.y 
             
           },
   created(){
      //组件创建后，在生命周期函数里发送网络请求,请求数据
     this.getHomeMultidata()
     this.gethomegoods('pop')
     this.gethomegoods('sell')
     this.gethomegoods('new')
    
 },
 mounted(){
     //处理图片加载完成后的监听事件，执行refresh函数，可以实时更新scroll的可滑动高度
    //  this.$bus.$on('itemimageload',()=>{ 
    //     this.$refs.Scroll.scroll.refresh()
    //    })
        //这样写的缺点是，每次加载一个图片就要刷新一次，很麻烦，所以引入防抖动，就是先等待一定时间，如果还有刷新请求，就取消上一次的刷新，跟后面的一起提交刷新
       
        const refresh=this.debounce(this.$refs.Scroll.refresh)
      this.$bus.$on('itemimageload',()=>{
        refresh()
          //加入防抖动后的滑动更新
      })
 },
    methods:{
        loadswiperimage(){
              //console.log(this.$refs.tabcontrol.$el.offsetTop);
              //获得tabcontrol距离页面顶部的距离
              this.tabcontroloffsettop=this.$refs.tabcontrol2.$el.offsetTop
        },
        debounce(func,delay){
               let timer=null
              return function(...args){
                if (timer) {
                    clearTimeout(timer)
                }
                timer=setTimeout(() => {
                   func.apply(this,args) 
                }, delay);
              }
        },

        backclick(){
           this.$refs.Scroll.scrollTo(0,0)
           //this.$refs.Scroll直接进入scroll组件，然后获取里面的方法和属性
        },
        loadmore(){
            //上拉加载更多
            
            this.gethomegoods(this.currentindex)
        },
        contentscroll(position){
            //回到顶部
            this.isshowbacktop=position.y<-1000
            //吸顶效果
            setTimeout(() => {
                this.istabshow=position.y<-this.tabcontroloffsettop
            }, );
        },
        goodschoose(index){
               switch(index){
                      case 0:this.currentindex='pop'
                      break
                      case 1:this.currentindex='new'
                      break
                      case 2:this.currentindex='sell'
                      
               }
               this.$refs.tabcontrol1.indexactive=index
                this.$refs.tabcontrol2.indexactive=index
        },
      getHomeMultidata(){
            getHomeMultidata().then(res=>{
         
           this.banner=res.data.banner.list
           this.recommends=res.data.recommend.list
       })
      },
      gethomegoods(type){
         const page=this.goods[type].page+1
          gethomegoods(type,page).then(res=>{
            
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
    position: relative;
    z-index: 9;
    background-color: white;
   }
   .content{
      position: absolute;
      left: 0px;
      top:44px;
      right: 0;
    
    
      
   }
</style>