<template>
  <div class="recommend">
        <div v-for="item in recommends" :key="item.title" class="recommend-item">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
  </div>
</template>

<script>
export default {
 name:'recommendview',
 props:{
     recommends:{
       type:Array,
       default(){
         return []
       }
     }
 }
}
</script>

<style>
   .recommend{
     display: flex;
     text-align: center;
     padding: 10px 0 20px;
     border-bottom: 3px solid #eee;
   }
   .recommend-item{
     flex: 1;
   
   }
   .recommend-item img{
     width: 80px;
     height: 80px;
      margin-bottom: 10px;
   }
</style>