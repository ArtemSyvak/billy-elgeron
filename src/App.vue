<template>

  <div id="app">
    <!--<router-view/>-->
    <Header/>
    <Banner/>
    <Services/>
  </div>

</template>


<script>

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Services from '@/components/Services'

export default {
  name: 'App',
  components:{
    Header,
    Banner,
    Services
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade|M+PLUS+Rounded+1c');

  html,
  body{
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-y: scroll;

  }
  /* width */
  body::-webkit-scrollbar {
    width: 0px;
  }
#app {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
