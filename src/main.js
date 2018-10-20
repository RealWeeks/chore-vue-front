import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import { store } from './store/store'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from 'axios'
import VueAxios from 'vue-axios'

import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
