<template>
  <div class="toast" v-show="isshow" >{{toastmassage}}</div>
</template>

<script>
export default {
 name:'Toast',
 data(){
   return {
     isshow:false,
     toastmassage:''
   }
 },
 methods:{
   show(massage,time=1500){
       this.toastmassage=massage
       this.isshow=true
       setTimeout(()=>{
          this.toastmassage=''
       this.isshow=false
       },time)
   }
 }
}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color:rgba(0, 0, 0, 0.8);
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    color: #fff;
    z-index: 999;
  }
</style>