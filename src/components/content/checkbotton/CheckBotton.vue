<template>
  <div class="checkbotton" :class="{checked:ischecked}">
  <img src="~assets/images/cart/tick.svg" alt="">
 
  </div>
</template>

<script>
export default {
 name:"CheckBotton",
 props:{
   ischecked:{
     type:Boolean,
     default: false
     
   }
 }
}
</script>

<style>
.checkbotton{
  height: 22px;
  width: 22px;
   border-radius: 50%;
   border: 2px solid #aaa;
  
   margin: 35px 10px 0 10px;
}

.checked{
 
   background-color: pink;
   border-color: pink;
}

</style>