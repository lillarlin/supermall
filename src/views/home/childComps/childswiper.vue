<template>
  <div>
      <Swiper>
          <SwiperItem v-for="item in banner" :key='item.title'> 
              <a :href="item.link">
                  <img :src="item.image" alt="">
              </a>
             
          </SwiperItem>
      </Swiper>
  </div>
</template>

<script>

import { Swiper, SwiperItem} from 'components/common/swiper'
export default {
name:'childswiper',
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
}
}
</script>

<style>

</style>