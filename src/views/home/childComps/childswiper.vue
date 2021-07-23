<template>
  <div>
      <Swiper>
          <SwiperItem v-for="item in banner" :key='item.title'> 
              <a :href="item.link">
                  <img :src="item.image" alt="" @load="swiperload">
              </a>
             
          </SwiperItem>
      </Swiper>
  </div>
</template>

<script>

import { Swiper, SwiperItem} from 'components/common/swiper'
export default {
name:'childswiper',
data(){
 return{
     isload:false
 }
},
components:{
    Swiper, 
    SwiperItem
},
props:{
    banner:{
        type:Array,
        default(){
            return []
        }
    }
},
methods:{
    swiperload(){
        //监听图片加载
        if(!this.isload){
            //用一个变量的状态来让该事件只发射一次
            this.$emit('swiperimageload')
            this.isload=true
        }
    }
}
}
</script>

<style>

</style>