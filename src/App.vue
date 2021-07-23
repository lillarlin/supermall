<template>
  <div id="app">
  <keep-alive exclude="Detail"> <router-view></router-view></keep-alive> 
  
  <!-- 路由每切换一次，被切换的页面都会被销毁，所以当从新回到该页面会重新加载，我们希望保持该页面，就使用keep-alive -->
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
import MainTarBar from 'components/content/mainTabBar/MainTarBar'
export default {
  name: 'App',
  components: {
    MainTarBar,
   
  }
}
</script>

<style>

@import './assets/css/base.css';
</style>
