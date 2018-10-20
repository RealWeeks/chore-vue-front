<template>
  <div id="calender">
      <div id='calendar'>
        <full-calendar :events="calendarizedData" :config="config" @eventClick="eventClick" @dayClick="dayClick" locale="en"></full-calendar>
        <div>
         <b-modal ref="quickCreate" @hidden="eventTask = null" hide-footer title="Quick create">
           <create-update @closeCreateUpdate="hideModal" :eventTask="eventTask" :selectedDate="selectedDate"/>
           <!-- <b-btn class="mt-3" @click="hideModal" variant="outline-danger" block >Close</b-btn> -->
         </b-modal>
       </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import Createupdate from './Createupdate.vue'
export default {
  name: 'calender',
  props:['json'],
  components : {
  	'full-calendar': require('vue-fullcalendar'),
    'create-update' : Createupdate,
  },
  methods:{
    eventClick(eventTask){
      // debugger
      this.$refs.quickCreate.show()
      this.eventTask = eventTask

    },
    dayClick(date){
      this.selectedDate = date
      this.$refs.quickCreate.show()
    },
    hideModal(){
      this.$refs.quickCreate.hide()
    }
  },
  created(){
  },
  computed:{
    calendarizedData(){
      return this.json.map((x)=>{
        x.title = `${x.task}: ${x.person}`
        x.start = moment(x.start).format('MM-DD-YYYY')
        return x
      })
    }
  },
  data () {
    return {
      selectedDate:null,
      eventTask:null,
      config: {
        selectable: true,
        editable:true,
      }
    }
  }
}
</script>

<style lang="scss">

</style>
