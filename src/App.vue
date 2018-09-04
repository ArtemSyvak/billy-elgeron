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
  html{
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
  body{
    overflow-y: scroll;
    overflow-x: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
