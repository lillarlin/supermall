<template>
   <div class="detailswiper">
     <Swiper class="itemswiper">
       <swiper-item v-for="item in topImage" :key='item.title'>
         <img :src="item" alt="">
       </swiper-item>
     </Swiper>
   </div>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name:'detailswiper',
  components:{
     Swiper, 
     SwiperItem
   
  },
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .itemswiper{
    height: 300px;
    overflow: hidden;
  }
</style>