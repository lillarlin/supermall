<template>
  <div class="goodslist">
     <goods-list-item :goodsitem="item" v-for="item in goods" :key="item.title1" >
       </goods-list-item> 
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: { GoodsListItem },
  name:'GoodsList',
  props:{
   goods:{
      type:Array,
    default(){
      return []
    }
   }
  }
}
</script>

<style>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  /* 设置图片一行显示几张，这样就要设置宽度才会生效，显示几张有图片宽度决定 */
  justify-content: space-around;
  /* 让图片均等分 */
  padding: 2px;
}
</style>