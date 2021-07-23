<template>
  <div class="bottom-bar">
    <div class="bar-left">
     <div>
        <i class="icon service"></i>
      <div class="text">客服</div>
     </div>
      <div>
        <i class="icon shop"></i>
      <div class="text">店铺</div>
     </div>
      <div>
        <i class="icon select"></i>
      <div class="text">收藏</div>
     </div>
    </div>
    <div class="bar-rigth">
     <div class="cart" @click="addcart">加入购物车</div>
     <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
name:"DetailBottomBar",
methods:{
  addcart()
{
  this.$emit('addtocart')
}}
}
</script>

<style scoped>
.bottom-bar{
  position: absolute;
  height: 49px;
  background-color: white;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  
}
.bar-left,.bar-rigth{
flex: 1;
display: flex;
}
.bar-left>div{
  flex: 1;
}
.bar-rigth div{
  flex: 1;
  line-height: 49px;
  text-align: center;
}
.icon{
  display: block;
  height: 22px;
  width: 22px;
  background: url("~assets/images/detail/detail_bottom.png") 0 -27px/100%;
  margin: 5px 5px;
  
}
.service{
  background-position: 0 -54px;
}
.shop{
  background-position: 0 -98px;
}
.text{
  margin: 0 3px;
}
.cart{
  background-color: yellow;
  font-size: 16px;
}
.buy{
  background-color: pink;
}
</style>