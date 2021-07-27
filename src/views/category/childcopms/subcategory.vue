<template>
  <div class="subcategory">
    <Scroll class="subcate-content" ref="Scroll">
      <div class="showsub-list">
    <a :href="item.link" v-for="(item,index) in subcatelist" :key="index" ><img   :src="item.image" alt="" @load="cateimg"></a>
     </div>
      <tab-control :title="['流行','新款','精选']" 
      class="cate-tab-control" @goodsclick="cateitemclick">
      </tab-control>
      <div class="itemchoose"><img :src="keyitem.img" alt=""  v-for="(keyitem,index) in getcategorydetail" :key="index"></div>
     </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scorll/Scroll.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'

export default {
 name:'subcategory',
 components:{Scroll, TabControl},
 props:{
   
  subcatelist:Array,
   default(){
     return []
   },
   getcategorydetail:Array,
   default(){
     return []
   }
 },
 mounted(){
   this.$refs.Scroll.refresh()
 },
 methods:{
   cateimg(){
    
      this.$refs.Scroll.refresh()
   },
   cateitemclick(index){
     const titlelist=['pop','new','sell']
     this.$parent.getcatedetail(this.$parent.categoryList[this.$parent.cateindex].miniWallkey,titlelist[index])

   }
 }
}
</script>

<style>
.showsub-list,.itemchoose{
   display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 
}
.itemchoose img{
  width: 45%;
  margin-bottom: 5px;
}

.showsub-list a {
 width: 50%;

}
.showsub-list a img{
  width: 80%;
}
.subcate-content{
 position: absolute;
      left: 0px;
      top:0px;
      right: 0;
     overflow: hidden;
     bottom: 98px;
     
}
.subcategory{
  height: 100vh;
  position: relative;
}
</style>