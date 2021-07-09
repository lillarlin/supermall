<template>
  <div class="tab-contorl">
     <div v-for="(item,index) in title" :key='item' class="tab-contorl-item"
     :class="{active:index===indexactive}" @click="itemclick(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
   name:'TabControl',
   props:{
     title:{
       type:Array,
       drfault(){
         return []
       }
     }
   },
   data(){
     return{
       indexactive:0
     }
   },
   methods:{
     itemclick(index){
         this.indexactive=index
         this.$emit('goodsclick',index)
     }
   }
}
</script>

<style>
.tab-contorl{
  display: flex;
  text-align: center;
   height: 40px;
  line-height: 40px;
  
  font-size: 14xp;
  z-index: 6;
}
.tab-contorl-item{
  flex: 1;
  
}
.active{
  color: red;
 
}
.active span{
  border-bottom: 1px solid red;
  padding: 5px;
}
</style>