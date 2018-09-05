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
  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade|Faster+One|Libre+Barcode+39+Extended+Text|Nosifer|Plaster|Bungee+Inline');
  html,
  body{
    height: 3000px;
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
