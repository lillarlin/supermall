<template>
  <div class="shop-info">
      <div class="shop-top">
       
      <img :src="showshops.logo" alt="">
        <span class="shop-title">{{showshops.name}}</span>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
          <div class="info-sells">
            <div class="sells-count">
              {{showshops.sells}}
            </div>
            <div class="sells-text">总销量</div>
          </div>
          <div class="info-goods">
            <div class="goods-count">
              {{showshops.goodsCount}}
            </div>
            <div class="goods-text">全部宝贝</div>
          </div>
        </div>
        <div class="shop-middle-item shop-middle-right">
          <table>
            <tr v-for="(item,index) in showshops.score" :key="index">
                <td>{{item.name}}</td>
                <td class="score" :class="{betterscore:item.isBetter}">{{item.score}}</td>
                <td class="better" :class="{bettermore:item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
            </tr>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"DetailShopInfo",
  props:{
    showshops:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style >
.shop-top{
  display: flex;
  position: relative;
  margin-bottom: 15px;
}
   .shop-top img{
     width: 50px;
     height: 50px;
     
   }
   .shop-title{
     position: absolute;
     top:20px;
     left:50px ;
     font-size: 18px;
     margin-left: 10px;
   }
   .shop-middle{
     display: flex;
   }
   .shop-middle-left{
     display: flex;
   }
   .sells-count,.sells-text{
     margin: 0 30px;
    
   }
   .sells-count, .goods-count{
     margin-top: 10px;
   }
   .goods-count,.goods-text{
     margin-right: 30px;
   }
   .better,.score{
     color: green;
    width: 40px;
    padding: 0 10px;
   }
   .betterscore,.bettermore{
     color: red;
   }
  
</style>