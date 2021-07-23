<template>
  <div class="bottom-bar">
   <div class="bottom-button" :class="{ischeck:isselectall}" @click="checkedall" >
  <img src="~assets/images/cart/tick.svg" alt="">
   </div>
   <div class="font" >全选</div>
   <div class="allprice">{{totalprice}}</div>
   <div class="checkbill">去计算({{checkbill}})</div>
  </div>
</template>

<script>


export default {
  name:'cartbottombar',
 computed:{
   totalprice(){
     return '￥'+this.$store.state.cartlist.filter(item=>{return item.checked}).reduce(
       //此处是要获取item，故要ruturn
       (prevalue,item)=>{return prevalue+item.price*item.count},0).toFixed(2)
   },
   checkbill(){
     return this.$store.state.cartlist.filter(item=> item.checked).length
     //此处是要获取cartlist的长度，故不需要return
   },
   isselectall(){
     //return !(this.$store.state.cartlist.filter(item=>!item.checked).length)
     //或者使用find，效率更高，因为他找到一个后便会停止查找，而filter会遍历所有的数据
     if(this.$store.state.cartlist.length===0) return false
     return !this.$store.state.cartlist.find(item=>!item.checked)
   }
 },
 methods:{
   checkedall(){
    
     if(this.isselectall){
       return this.$store.state.cartlist.forEach(item => {
            item.checked=false
       });
     } else{
       return this.$store.state.cartlist.forEach(item => {
            item.checked=true
       });
     }
   }
 }
}
</script>

<style>
.bottom-bar{
  height: 40px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 49px;
  right: 0;
  display: flex;
  line-height: 40px;
  
}
.bottom-button{
  height: 22px;
  width: 22px;
   border-radius: 50%;
   border: 2px solid #aaa;
  align-items: center;
  margin: 8px ;
  line-height: 20px;
}

.allprice{
  margin:0 70px;
  color: red;
}
.checkbill{
 
  background-color: pink;
  padding: 0 10px;
  flex: 1;
  text-align: center;
}
.ischeck{
  background-color: pink;
   border-color: pink;
}

</style>