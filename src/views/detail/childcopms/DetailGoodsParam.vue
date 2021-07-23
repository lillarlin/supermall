<template>
  <div class="detailgoodsparam" v-if="Object.keys(paraminfo).length!==0">
   <table v-for="(table,index) in paraminfo.sizes" :key="index" class="info-sizes">
     <tr v-for="(tr,indey) in table" :key="indey">
       <td v-for="(td,indez) in tr " :key="indez" class="param-info-sizes">{{td}}</td>
     </tr>
   </table>
   <table class="info-param">
     <tr v-for="(info,index) in paraminfo.info" :key="index">
       <td class="param-info-key">{{info.key}}</td>
       <td class="param-value">{{info.value}}</td>
     </tr>
   </table>
   <div class="info-img"  v-if="paraminfo.image.length!==0">
     <img :src="paraminfo.image" alt="" @load="paramimage">
   </div>
  </div>
</template>

<script>
export default {
name:'DetailGoodsParam',
props:{
  paraminfo:{
    type:Object,
    default(){
      return {}
    }
  }
},
methods:{
  paramimage(){
     this.$emit('loadparamimg')
  }
}
}
</script>

<style>
.param-info-key{
  width: 80px;
  height: 50px;
  font-weight: 700;
}
.param-info-sizes{
  padding: 0 2px;
  height: 30px;
   font-weight: 700;
}
.param-value{
  color: pink;
}
</style>