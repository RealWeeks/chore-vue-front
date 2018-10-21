<template>
  <div id="calender-wrapper">
      <div id='calendar'>
        <full-calendar :events="calendarizedData" :config="config" @eventClick="eventClick" @dayClick="dayClick" locale="en"></full-calendar>
        <div>
         <b-modal ref="quickCreate" @hidden="eventTask = null" hide-footer hide-header>
           <create-update @closeCreateUpdate="hideModal" :eventTask="eventTask" :selectedDate="selectedDate"/>
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
        if (x.event_type === 'away') {
          x.title = `Away - ${x.person}`;
        }else{
          x.title = `${x.task}: ${x.person}`;
        }
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
#calendar{
  .modal-body{
    padding: 5px;
  }
}
</style>
