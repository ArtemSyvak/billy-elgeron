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
        <span class="icon-bar"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active ">
            <a class="nav-link" href="#">Home</a>
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
  .navbar-toggler{
    overflow: hidden;

    .icon-bar{
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: #000;
      transition: 0.3s;
        &::after,
        &::before{
          left: 0;
          margin: 13px 0;
          background-color: #000;
          content: '';
          position: absolute;
          width: 30px;
          height: 2px;
          transition: 0.6s;
        }
        &::after{
          top:-5px;
        }
        &::before{
          bottom: -5px;
        }
    }
    &[aria-expanded="true"]{
      span.icon-bar{
          width: 0;
          transition: 0.3s;
          &:after{
            width: 30px;
            display: block!important;
            transform: rotate(-45deg);
            top: -11px;
            left: 2px;
            transition: 0.4s;
            transition-delay: 0.2s;
          }
          &:before{
            width: 30px;
            display: block!important;
            left: 2px;
            transform: rotate(45deg);
            bottom: -15px;
            transition: 0.4s;
            transition-delay: 0.2s;
          }

      }
    }
  }


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
  }
</style>
