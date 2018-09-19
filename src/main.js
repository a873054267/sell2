// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import Icon from 'vue2-svg-icon/Icon.vue'
Vue.use(vueResource)

Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
