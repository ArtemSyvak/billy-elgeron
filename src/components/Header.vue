<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <div class="logo">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="288.000000pt" height="288.000000pt" viewBox="0 0 288.000000 288.000000"
               preserveAspectRatio="xMidYMid meet" class="logo-svg">
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g  class="logo-items" transform="translate(0.000000,288.000000) scale(0.100000,-0.100000)"
                fill ="#000000" stroke="none">
              <path class="f-logo" d="M810 1745 l0 -305 150 0 150 0 0 150 0 150 150 0 150 0 0 155 0 155
-300 0 -300 0 0 -305z"/>
              <path d="M1450 1895 l0 -155 150 0 150 0 0 -150 0 -150 150 0 150 0 0 305 0
305 -300 0 -300 0 0 -155z"/>
              <path d="M1750 1250 l0 -150 -150 0 -150 0 0 -155 0 -155 300 0 300 0 0 305 0
305 -150 0 -150 0 0 -150z"/>
            </g>
          </svg>
        </div>
      </a>
      <a class="navbar-brand logo-name" href="#">Elgeron</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <!--<span class="icon-bar"></span>-->
        <!--<span class="icon-bar"></span>-->
        <!--<span class="icon-bar"></span>-->
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active ">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Find Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    margin-left: 0;
    margin-right: 0;
    position: fixed;
    z-index: 99999;
    width:100%;
  }
  /*animation for hamburger*/

  $speed: 200ms;
  $easing: cubic-bezier(0.7, 0, 0, 0.7);

  .navbar-toggler{
    overflow: hidden;

    .icon-bar {
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: opacity, transform;
      transition-duration: $speed;
      transition-timing-function: $easing;
    }

    &:not(.collapsed) {
      .icon-bar {
        &:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }
      }
    }
  }
  /*@import "../../node_modules/hamburgers/_sass/hamburgers/hamburgers";*/
  /*svg g path:nth-child(1n){*/
    /*animation: pulse 4s 1s infinite;*/
  /*}*/
  /*svg g path:nth-child(2n){*/
    /*animation: pulse 4s 2s infinite;*/
  /*}*/
  /*svg g path:nth-child(3n){*/
    /*animation: pulse 4s 3s infinite;*/
  /*}*/

  /*@keyframes pulse{*/
    /*0% {*/
      /*opacity: 0;*/
    /*}*/
    /*100% {*/
      /*opacity: 1;*/
    /*}*/
  /*}*/
  .brand-image{
    background-color: #f9ed37;
  }
  .navbar{
    background-color: #f9ed37!important;
    padding: 0 100px;
    margin: 0;
    a{
      font-family: 'Bungee Shade', cursive;
      color: #000;
      border-bottom:1px solid transparent;
      padding: 0 0 5px 0;
      transition: 0.3s;
      &:hover{
        transition: 0.3s;
        border-bottom:1px solid #000;
      }
      &.navbar-brand:hover{
        border-color: transparent;
      }
    }
  }
  svg{
    width: 80px;
    height: 80px;
    background-color: #f9ed37;
  }
  svg g{
    transition: 0.1s ease;
    fill: #000;
  }
  svg g path:hover{
    transition: 0.1s ease;
    fill: transparent;
  }
  /*svg g path:nth-child(1n){*/
  /*fill: azure;*/
  /*}*/
  /*svg g path:nth-child(2n){*/
  /*fill: crimson;*/
  /*}*/
  /*svg g path:nth-child(3n){*/
  /*fill: aqua;*/
  /*}*/
  .navbar-light .navbar-toggler{
    border: 0;
    outline:none;
  }
  @media screen and(max-width:991px) {
    .logo-name{
      display: none;
    }
    .nav-item{
      a{
        border: 0;
        &:hover{
          border: 0;
        }
      }
      padding: 5px 0;
    }
    .navbar {
      a{
        padding: 10px;
      }
    }
    .navbar-toggle span.icon-bar {
      transition: all 0.15s;
    }

    .navbar-toggle span:nth-child(2) {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }

    .navbar-toggle span:nth-child(3) {
      opacity: 0;
    }

    .navbar-toggle span:nth-child(4) {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }

    .navbar-toggle.collapsed span:nth-child(2),
    .navbar-toggle.collapsed span:nth-child(4) {
      transform: rotate(0);
    }

    .navbar-toggle.collapsed span:nth-child(3) {
      opacity: 1;
    }
  }
</style>
