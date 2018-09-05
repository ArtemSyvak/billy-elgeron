<template>
   <section id="banner">
       <div class="parallax-header">
         <h1>Who is Elgeron?</h1>
         <p>Let`s try imagine</p>
         <div class="layer"></div>
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
    color: #fff;
    /*overflow-y: scroll;*/
    /*perspective: 1px;*/
    /*transform-style: preserve-3d;*/

    /*removed scrollbar*/
    &::-webkit-scrollbar {
      width: 0px;
    }

    .parallax-header{
      box-sizing: border-box;
      height: 100vh;
      width: 100vw;
      padding-top: 25%;
      transform-style: inherit;

      &::before{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
        opacity: 0.65;
        transform-origin: center;
        min-height: 100vh;
        background: url('../assets/main-banner.jpg') no-repeat fixed;
        background-size: cover;
        /*<!--transform: translateZ(-1px) scale(2);-->*/
      }

    }
    .layer{
      position: absolute;
      width: 100%;
      height:100%;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transform: translateZ(-1px) scale(1);
      background-color: rgba(0, 0, 0, 0.3);

    }

  }

</style>
