<template>
  <div class="wraper" ref="wraper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
//引入better-scroll框架
export default {
    name:'Scroll',
    props:{
      probetype:{
        type:Number,
        default(){
          return 0
        }
      },
      pullup:{
        type:Boolean,
        default(){
          return false
        }
      }
    },

    data(){
      return {
        scroll:null
        //用来保存数据
      }
    },
    mounted(){
      //在钩子函数里面创建bscroll实例，并保存到组件数据中，这样在执行后不会消失
     this.scroll=new BScroll(this.$refs.wraper,{
       //通过this.$refs.wraper来获取dom元素
     observeDOM:true,
     mouseWheel:true,
     click:true,
     probeType:this.probetype,
     pullUpLoad:this.pullup
       })
       this.scroll.on('scroll',(position)=>{
         this.$emit('scroll',position)
       })
       this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup')
       })
    },
    methods:{
        scrollTo(x,y,time=500){
          this.scroll.scrollTo(x,y,time)
        //scrollTo方法，滑到到某个位置，和所需时间
        },
        finishpullup(){
          this.scroll.finishPullUp()
        }
    }
}
</script>

<style>
 .wraper{
    position: fixed;
    bottom: 49px;
    top: 44px;
  } 
</style>