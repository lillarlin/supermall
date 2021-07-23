<template>
  <div class="detailgoodsinfo" v-if="Object.keys(detailgoodsinfo)!==0">
    <div class="start"></div>
     <div class="desc">
       {{detailgoodsinfo.desc}}
     </div>
     <div class="end"></div>
     <div class="info-key" v-if="detailgoodsinfo.detailImage">{{detailgoodsinfo.detailImage[0].key}}</div>
     <div class="info-list" v-if="detailgoodsinfo.detailImage">
       <img v-for="(item,index) in detailgoodsinfo.detailImage[0].list" :key="index"  :src="item" alt="" @load="imageload" >
     </div>
  </div>
</template>

<script>
export default {
 name:"DetailGoodsInfo",
 props:{
   detailgoodsinfo:{
     type:Object,
     default(){
       return {}
     }
   }
 },
 data(){
   return{
     counter:0,
     imagelength:0
   }
 },
 methods:{
   imageload(){
            if(++this.counter===this.iamgelength){
              this.$emit('imgload')
            }
   }
 },
 watch:{
   detailgoodsinfo(){
     this.iamgelength=this.detailgoodsinfo.detailImage[0].list.length
   }
 }
}
</script>

<style>
.info-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.info-list img{
    width: 90%
  
   
}
.desc{
  margin: 20px 0px;
  border: 1px solid #e6e6e6;
}
.info-key{
  
  margin-bottom: 20px;
  font-size: 20px;
  height: 30px;
  width: 100px;
  border: solid 1px pink;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
  background-color: pink;
  color: white;
}
</style>