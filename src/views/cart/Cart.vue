<template>
  <div class="cart">
    <nav-bar class="navbar2">
      <div slot="center" class="centerbar">购物街({{cartlength}})</div>
    </nav-bar>
     <Scroll class="contents"  :probetype="3" :pullup="false" ref="Scroll"  :style="{top:changetop}" > 
       <cart-list @loadcartimg='loadcartimg'></cart-list>
     </Scroll>
     <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './cartchildcopms/ListCart.vue'
import CartBottomBar from './cartchildcopms/cartbottombar.vue'
  import Scroll from '../../components/common/scorll/Scroll.vue'
export default {
  components: { 
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
     name:'Cart',
     computed:{
     ...mapGetters(['cartlength']),
     changetop(){
       if(this.$store.state.cartlist.length<5){
         return 0
       }else{
         return 44+'px'
       }
     }
     },
     mounted(){
          this.$refs.Scroll.refresh()
     },
    methods:{
       loadcartimg(){
         this.$refs.Scroll.refresh()
       }
     },
    activated(){
       this.$refs.Scroll.refresh()
       //图片加载的刷新在mounted里面，而点击后添加内容的刷新要在activated里面，activated在mounted后面
     }
}
</script>

<style>
  .centerbar{
    color: white;
    font-size: 16px;
  }
  .navbar2{
       background-color: pink;
  }
  .cart{
   position: relative;
  
   height: 100vh;
    
  }
  .contents{
      position: absolute;
      left: 0px;
      /* top: 44px; */
      right: 0px; 
     overflow: hidden;
   }
</style>