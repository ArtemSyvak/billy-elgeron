// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
global.$ = jQuery;
global.jQuery = jQuery;
let lazylinepainter = require('lazy-line-painter');
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
//
// document.querySelector('.button').onmousemove = (e) => {
//
//   const x = e.pageX - e.target.offsetLeft
//   const y = e.pageY - e.target.offsetTop
//
//   e.target.style.setProperty('--x', `${ x }px`)
//   e.target.style.setProperty('--y', `${ y }px`)
//
// }
