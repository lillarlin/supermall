<template>
  <div v-if="Object.keys(showgoods)!==0" class="base-info">
      <div class="info-title">{{showgoods.title}}</div>

      <div class="info-price">
        <span class="n-price">{{showgoods.newPrice}}</span>
        <span class="o-price">{{showgoods.oldPrice}}</span>
        <span v-if="showgoods.discount" class="discount">{{showgoods.discount}}</span>
      </div>

      <div class="info-other" v-if="showgoods.columns">
        <!-- v-if是用来判断show-columns是否有内容，这样的话就不会报错说0未定义，但是dom却渲染出来了 -->
        <span>{{showgoods.columns[0]}}</span>
        <span>{{showgoods.columns[1]}}</span>
        <span>{{showgoods.services[showgoods.services.length-1].name}}</span>
      </div>
      
      <div class="info-services" v-if="showgoods.services">
        <span class="info-services-item" v-for="index in showgoods.services.length-1" :key="index">
          <img :src="showgoods.services[index-1].icon" alt="">
          <span>{{showgoods.services[index-1].name}}</span>

        </span>
      </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    showgoods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
 .info-title{
   font-size: 18px;
   font-weight: 700;
   margin-bottom: 10px;
 }
 .info-price{
  
   margin-bottom: 20px;
 }
 .n-price{
   color: red;
   font-size: 20px;
   font-weight: 700;
   padding: 0 5px;
 }
 .o-price{
   color: gray;
   font-size: 14px;
   text-decoration: line-through;
 }
 .discount{
   font-size: 15px;
   text-align: center;
   display: inline-block;
   height: 20px;
   width: 70px;
   border: 1px pink solid;
   border-radius: 10px;
   background-color: pink;
   color: white;
   /* position: absolute;
   top: -5px;
   left: 140px; */
  transform: translateY(-5px);
 }
 .info-other{
   display: flex;
   margin-bottom: 20px;
   border-bottom: 1px solid #e6e6e6;
 }
 .info-other span{
   flex: 1;
   text-align: center;
   margin-bottom: 5px;
 }
 .info-services{
   display: flex;
  
   border-bottom: 1px solid #e6e6e6;
 }
 .info-services-item{
   flex: 1;
  text-align: center;
   margin-bottom: 20px;
 }
 .info-services-item img{
   width: 15px;
   height: 15px;
  
 }
 .info-services-item span{
   font-size: 16px;
 }
</style>