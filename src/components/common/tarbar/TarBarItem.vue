<template>
  <div class="tab-bar-item" @click="itemclick">
      <slot v-if="!isactive" name='item-icon'></slot>
      <slot v-else name="item-icon-active"></slot>
    <div :style="activestyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
   name:'tabbaritem',
   props:{
       path:String,
        activecolor:{
         type:String,
         default:'red'
   }
   },
  
   data(){
      return{ 
         
      }
   },
   computed:{
         isactive(){
             return this.$route.path.indexOf(this.path) !==-1
             //判断当前页面是否活跃
         },
         activestyle(){
            return this.isactive?{color: this.activecolor}:{}
         }
   },
  methods:{
      itemclick(){
        this.$router.push(this.path)
      }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
}

</style>