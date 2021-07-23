<template>
  <div class="goodslistitem" @click="godetail">
    <img :src="showimage" alt="" @load="imageload">
    <!-- 监听图片加载 -->
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
  },
  methods:{
    //图片加载完之后通过事件总线发射一个监听事件
    imageload(){
     if(this.$route.path.includes('/home')){
       this.$bus.$emit('itemimageload')
     }else if(this.$route.path.includes('/detail')){
      this.$bus.$emit('detailimageload')
     }
     },
    godetail(){
     this.$router.push('/detail/'+this.goodsitem.iid)
    }
  },
  computed:{
    showimage(){
      return this.goodsitem.image || this.goodsitem.show.img
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