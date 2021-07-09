<template>
  <div class="goodslistitem">
    <img :src="goodsitem.show.img" alt="">
    <div class="goods-info"><p>{{goodsitem.title}}</p>
         <span class="price">{{goodsitem.price}}</span>
         <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.goodslistitem{
   width: 45%;
  
}
  .goodslistitem img,.goods-info{
   width: 100%;
  border-radius: 5px;
  
  }
    .goods-info{
      font-size: 12px;
      height: 40px;
     
    }
   .goods-info p{
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
   }
    .goods-info .price{
        margin-left: 50px;
        color: pink;
    }
    .goods-info .cfav{
      position: relative;
      margin-left: 20px;
      color: red;
    }
    .goods-info .cfav::before{
      content: '';
      position: absolute;
      top: -1px;
      left: -15px;
      width: 14px;
      height: 14px;
      background: url('~assets/images/common/collect.svg') 0 0/14px 14px;
      /* background-position-x: 0px;
         background-position-y: 0px;
         background-size: 14px 14px; */
    }
</style>