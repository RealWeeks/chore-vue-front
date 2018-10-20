<template>
  <div id="calender">
      <div id='calendar'></div>
      <full-calendar :events="calendarizedData" locale="en"></full-calendar>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'calender',
  props:['json'],
  components : {
  	'full-calendar': require('vue-fullcalendar')
  },
  created(){
  },
  computed:{
    calendarizedData(){
      return this.json.map((x)=>{
        x.title = `${x.task}: ${x.person}`
        x.start = moment(x.date).format('MM-DD-YYYY')
        return x
      })
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
