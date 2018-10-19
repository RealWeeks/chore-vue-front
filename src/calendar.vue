<template>
  <div id="calender">
      <div id='calendar'></div>
      <full-calendar :events="json" locale="en"></full-calendar>
  </div>
</template>

<script>
export default {
  name: 'calender',
  props:['json'],
  components : {
  	'full-calendar': require('vue-fullcalendar')
  },
  created(){
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
