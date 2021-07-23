<template>
  <div class="childbar">
     <nav-bar>
       <div slot="left"  @click="backclick"><div><img src="~assets/images/common/back.svg" alt="" class="back"></div></div>
       <div slot="center"  class="title"><div v-for="(item,index) in title" :key='item.title' class="item-title" :class="{active:index==currtenindex}" @click="change(index)">{{item}}</div></div>
     </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },
 name:'ChildBar',
 data(){
   return{
     title:['商品','参数','评论','推荐'],
     currtenindex:0
   }
 },
 methods:{
   change(index){
    this.currtenindex=index
    this.$emit('change',index)
   },
 backclick(){
   this.$router.back()
 }
 }
}
</script>

<style>
  .title{
    display: flex;
  }
  .item-title{
    flex: 1;
  }
  .active{
    color: red;
  }
  .back{
    margin-top: 10px;
  }
</style>