<template>
 <div>
    <div class="wraper">
        <ul class="content">
            <button @click="butclick">点击</button>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>

            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
            <li>哈哈哈</li>
        </ul>
    </div>
 </div>
</template>

<script>
import bscroll, { MouseWheel } from 'better-scroll'
export default {
name:'Category',
data(){
    return {
        scroll:null
    }
},
mounted(){
    //钩子函数，在组件挂载后才可以获得dom元素，所以不可以在creatd函数里面使用
    this.scroll=new bscroll(document.querySelector('.wraper'),{
        probeType:3,
        pullUpLoad:true,
       mouseWheel:true,
      
    })
    this.scroll.on('scroll',(position)=>{
        console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
          console.log('上啦加载更多');
    })
},
methods:{
    butclick(){
        console.log('点击了了');
    }
}
}
</script>

<style>
.wraper{
    height: 200px;
    /* 必须设置高度 */
    background-color: red;
    overflow: hidden;
}
</style>