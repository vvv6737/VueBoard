<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'; //import 헤더 추가
import Footer from './components/common/Footer.vue'; //import 풋터 추가

export default {
  name: 'App',
  components: {
    Header
    ,Footer
  }
}
</script>

<style>
  html,body{padding:0; margin:0;}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin:0; padding:0;
  }
</style>