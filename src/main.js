import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'vue-awesome/icons/times'

import fullCalendar from 'vue-fullcalendar'

import { store } from './store/store'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import 'vue-awesome/icons/times'
import Icon from 'vue-awesome/components/Icon.vue'


miniToastr.init()

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.component('full-calendar', fullCalendar)
Vue.component('v-icon', Icon)

Vue.use(VueNotifications, options)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
