<template>
  <div>
  <div id="tab-bar">
   <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
       name:'tab'
}
</script>

<style>

#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
 
  box-shadow: 0 -3px 1px rgba(255, 255, 255, 0.1);
  
}


</style>