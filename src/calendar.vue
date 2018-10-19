<template>
  <div id="calender">
      <div id='calendar'></div>
      <full-calendar :events="json" locale="en"></full-calendar>
  </div>
</template>

<script>
// const jsondata = require('./assets/chore-calender.json')
import jsondata from './assets/chore-calendar.json';
export default {
  name: 'calender',
  components : {
  	'full-calendar': require('vue-fullcalendar')
  },
  created(){

    // debugger;

  },
  data () {
    return {
      json: jsondata
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
