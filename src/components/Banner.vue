<template>
   <section id="banner">
     <div>
      <img src="../assets/main-banner.jpg" alt="">
     </div>
   </section>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped lang="scss">
  #banner{
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 50em;

    img{
      display: inline-block;
      width: 100%;
      height: 100%;

    }
  }

</style>
