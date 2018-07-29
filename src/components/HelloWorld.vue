<template>
  <div class="hello">
    <ul class="menu">
      <li class="menu-item"><a href="#" class="menu-item-link">Home</a></li>
      <li class="menu-item"><a href="#" class="menu-item-link">Blog</a></li>
      <li class="menu-item"><a href="#" class="menu-item-link">Projects</a></li>
      <li class="menu-item"><a href="#" class="menu-item-link">About</a></li>
      <li class="menu-item"><a href="#" class="menu-item-link">Find Us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Elgeron',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu{
    height: 100px;
    background-color: crimson;
      .menu-item {
        height: 100%;
        width: 100px;
        padding: 0 20px;
        float: left;
        list-style: none;
          .menu-item-link{
            width: 100%;
            color:#fff;
            text-decoration: none;
          }
      }
  }
</style>
