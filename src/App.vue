<template>
  <div id="app">
    <router-view/>
    <CanvasMotionGraphic/>
    <!--<CrazyMotionGraphic/>-->
  </div>
</template>


<script>

import CanvasMotionGraphic from '@/components/CanvasMotionGraphic'
import CrazyMotionGraphic from '@/components/CrazyMotionGraphic'

export default {
  name: 'App',
  components:{
    CanvasMotionGraphic,
    CrazyMotionGraphic
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
