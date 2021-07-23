<template>
  <div class="cart-list">
    
   <div v-for="(item,index) in cartlist" :key="index" class="cartnum">
  <check-botton :ischecked="item.checked" @click.native="checkclick(index)"></check-botton>
    <div class="left-cart"><img :src="item.image" alt="" @load='cartimgload'></div>
    <div class="cartrigth"> 
      <div class="carttitle">{{item.title}}</div>
      <div class="cartdesc">{{item.desc}}</div>
      <div class="cartprice">
        <div class="pricecart">￥{{item.price}}</div>
        <div class="countcart">X{{item.count}}</div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckBotton from 'components/content/checkbotton/CheckBotton.vue'
export default {
 name:'CartList',
 components:{ CheckBotton},
 computed:{
    ...mapGetters(['cartlist'])
 },
 methods:{
   cartimgload(){
     this.$emit('loadcartimg')
   },
   checkclick(index){
    this.$store.state.cartlist[index].checked = !this.$store.state.cartlist[index].checked
   }
 }
}
</script>

<style scoped>
.cartnum{
  height: 100px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #e6e6e6;
  
}
.left-cart img{
  height: 90px;
  border-radius: 5px ;
}
.cartleft,.cartrigth{
  flex: 1;
}
.carttitle,.cartrigth,.cartdesc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 
}
.cartrigth{
   text-align: left;
  margin-left: 10px;
}
.pricecart{
  float: left;
  color: pink;
}
.countcart{
  margin-right: 15px;
  float: right;
}
.carttitle{
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px ;
}
.cartdesc{
  font-size: 12px;
  color: gray;
  margin-bottom: 20px;
}
</style>