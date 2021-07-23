<template>
  <div id="details">
    <child-bar class="childbar" @change="titleclick" ref="nav"></child-bar>
    <Scroll class="contents"  :probetype="3" :pullup="false" ref="Scroll" @scroll="contentscroll">
      
      <detailswiper :top-image='topimages'></detailswiper>
    <detail-base-info :showgoods="goods"></detail-base-info>
    <detail-shop-info :showshops="shops"></detail-shop-info>
    <detail-goods-info :detailgoodsinfo="detailInfo" @imgload="imgload"></detail-goods-info>
    <detail-goods-param :paraminfo="goodsparam" ref="param"></detail-goods-param>
    <detail-comment-info :commentinfo="comments" ref="comment"></detail-comment-info>
    
    <goods-list :goods='recommend' ref="recommend"></goods-list>
    </Scroll>
    <detail-bottom-bar @addtocart="addtocart"></detail-bottom-bar>
     <back-top @click.native="backclick" v-show="isshowbacktop"></back-top>
    
  </div>
</template>

<script>
import ChildBar from './childcopms/ChildBar.vue'
 import detailswiper from './childcopms/detailswiper.vue'
 
import {getdetail,Goods,Shops,GoodsParam,getrecommend} from 'network/detail.js'
import DetailBaseInfo from './childcopms/DetailBaseInfo.vue'
import DetailShopInfo from './childcopms/DetailShopInfo.vue'
import DetailGoodsInfo from './childcopms/DetailGoodsInfo.vue'
import Scroll from '../../components/common/scorll/Scroll.vue'
import DetailGoodsParam from './childcopms/DetailGoodsParam.vue'
import DetailCommentInfo from './childcopms/DetailCommentInfo.vue'
import {debounce} from 'common/utils'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childcopms/DetailBottomBar.vue'
import BackTop from '../../components/content/backtop/BackTop.vue'


export default {
 name:'Detail',
 components:{
   ChildBar,
   getdetail,
   detailswiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll,
  DetailGoodsInfo,
  GoodsParam,
  DetailGoodsParam,
  DetailCommentInfo,
  getrecommend,
  GoodsList,
  debounce,
  DetailBottomBar,
  BackTop,
 
 
 },
 
 data(){
   return{
     iid:null,
     topimages:[],
     goods:{},
     shops:{},
     detailInfo:{},
     goodsparam:{},
     comments:{},
     recommend:[],
     themeTopY:[],
     getthemeTopY:[],
     currentindex:null,
     isshowbacktop:false,
    
   }
 },
 created(){
   this.iid=this.$route.params.id
   //获取地址参数使用$route.params,注意不是$router
   getdetail(this.iid).then(res=>{
    //  console.log(res);
     const data=res.result
     this.topimages=res.result.itemInfo.topImages
     this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
     this.shops=new Shops(data.shopInfo)
     this.detailInfo=data.detailInfo
     this.goodsparam=new GoodsParam(data.itemParams.info,data.itemParams.rule)
     if(data.rate.cRate!==0){
       this.comments=data.rate.list[0]
     }
   })
   getrecommend().then(res=>{
     console.log(res);
     this.recommend=res.data.list
   })
   this.getthemeTopY=debounce(()=>{
     this.themeTopY=[]
     this.themeTopY.push(0)
     this.themeTopY.push(this.$refs.param.$el.offsetTop)
     this.themeTopY.push(this.$refs.comment.$el.offsetTop)
     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
   })
 },
mounted(){
  //详情页滑动刷新
     const refresh=debounce(this.$refs.Scroll.refresh)
      this.$bus.$on('detailimageload',()=>{
        refresh()
     
          //加入防抖动后的滑动更新
      })
 },

 methods:{
   //添加到购物车
   addtocart(){
     //1.获取购物车所需的信息
      const product={}
      product.image=this.topimages[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      product.iid=this.iid
      //2.把信息添加到购物车里
      this.$store.dispatch('addcart',product).then(res=>{
         this.$toast.show(res)
        })
      //dispacth连接actions，conmmit连接mutitions
   },
   backclick(){
           this.$refs.Scroll.scrollTo(0,0)
           //this.$refs.Scroll直接进入scroll组件，然后获取里面的方法和属性
        },
   imgload(){
     this.$refs.Scroll.refresh()
     //在这里获得的top值才是正确的
     this.getthemeTopY()
   },
   titleclick(index){
     this.$refs.Scroll.scrollTo(0,-this.themeTopY[index]-44,200)
   },
   contentscroll(position){
     //滑动到某位置时改变导航栏
     const positionY=-position.y
      this.isshowbacktop=position.y<-2000
     let length=this.themeTopY.length
      for(let i=0;i<this.themeTopY.length;i++){
        if(this.currentindex!==i && ((i<length-1 && positionY>=this.themeTopY[i] && positionY<this.themeTopY[i+1]) || (i===length-1 && positionY>=this.themeTopY[i]) )){
          this.currentindex=i
          this.$refs.nav.currtenindex=this.currentindex
}
      }
   }
 }
 
}
</script>

<style scoped>
#details{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
 .contents{
      position: absolute;
      left: 0px;
      top: 44px;
      right: 0px; 
   
   }
 .childbar{
   position: relative;
   z-index: 10;
   background-color: #fff;
 }
</style>