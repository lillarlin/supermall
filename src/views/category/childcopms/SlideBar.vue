<template>
  <div class="slidebar">
     <Scroll class="cate-content" ref="Scroll">
        <div v-for="(item,index) in slidebarlist" :key="index" class="slidebaritem" @click="categoryclick(index)" :class="{itemactivate:isact=currtindex===index}">{{item.title}}</div>
     </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scorll/Scroll.vue'
export default {
   name:"SlideBar",
   components:{
     Scroll
   },
   props:{
     slidebarlist:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data(){
     return {
        currtindex:0,
        isact:Boolean
     }
   },
   methods:{
     categoryclick(index){
        const obj = {
        maitKey: this.slidebarlist[index].maitKey,
        index
      };
           this.currtindex=index
           this.$emit('clickcategory',obj)
     }
   }
}
</script>

<style scoped>
.slidebaritem{
  height: 45px;
  width: 100px;
  line-height: 45px;
  background-color: #f6f6f6;
  text-align: center;
  margin-bottom: 3px;
}
.cate-content{
 position: absolute;
      left: 0px;
      top:0px;
      right: 0;
      bottom: 98px;
      overflow: hidden;
      float: left;
  
      
}
.slidebar{
  height: 100vh;
  position: relative;
}
.itemactivate{
  background-color:#f3f3;
}
</style>