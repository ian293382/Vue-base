<script setup lang="ts">

</script>

<template>
  <div id="app">
    <header></header>
    <main>
      <NavBar></NavBar>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Routers from '../routes/index.js'; // 修正 import 的錯誤
  import NavBar from '@/components/NavBar.vue';
  import './assets/reset.css'

  export default {
    name: 'App',
    components: {
      Routers,
      NavBar
    }
  }
</script>

<style scoped>
  #app {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>