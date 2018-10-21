<template>
  <div id="away-time" class="standard-form">
    <div @click="$emit('closeAwaytime')" class="x-close">
      <v-icon name="times"/>
    </div>
    <div class="form-wrapper">
      <b-form v-if="show">
        <b-form  class="away-date-inputs" inline>
        <b-form-group
                      label="Start date">
          <datepicker v-model="form.start" class="datepicker"></datepicker>
        </b-form-group>
        <b-form-group
                      label="End date">
          <datepicker v-model="form.end" class="datepicker"></datepicker>
        </b-form-group>
        </b-form>
        <b-form-group
                      label="Your Name">
          <b-form-select
                      :options="people"
                      required
                      v-model="form.person">
        </b-form-select>
        </b-form-group>
      </b-form>

    </div>
    <b-button @click="handleSetAway" variant="outline-info">Set as away</b-button>
  </div>
</template>

<script>
import moment from 'moment'
import { extendMoment } from 'moment-range';
const Moment = extendMoment(moment);
import Datepicker from 'vuejs-datepicker'
import Notifications from './common/notifications.vue'
export default {
  name: 'away-time',
  props:[],
  mixins:[Notifications],
  components : {
    'datepicker': Datepicker,
  },
  created(){
  },
  methods:{
    onReset () {
      this.form.person = null
      this.form.start = ''
      this.form.end = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true })
    },
    handleSetAway(){
      this.form.start = moment(this.form.start).format('MM-DD-YYYY')
      this.form.end = moment(this.form.end).format('MM-DD-YYYY')
      this.form.date_range = this.dateRange;
      this.axios.post('http://localhost:3000/events', this.form)
      .then((response)=>{
        this.$store.dispatch('GET_EVENTS')
        this.$emit('closeAwaytime')
        this.showSuccessMsg({message: 'Away dates added.'})
      })
      .catch((err)=>{
        this.showErrorMsg({message:'Error adding dates.'})
      })
    }
  },
  computed:{
    dateRange(){
      let start = new Date(this.form.start)
      let end   = new Date(this.form.end)
      let range = Moment.range(start, end)
      for (let day of range.by('day')) {
        day.format('MM-DD-YYYY');
      }
      let days = Array.from(range.by('day'));
      return days.map(x => x.format('MM-DD-YYYY')) // [ '2018-10-03', '2018-10-04', '2018-10-05', '2018-10-06' ]
    }
  },
  data () {
    return {
      form: {
        person: null,
        start: '',
        end:'',
        allDay:true,
        event_type: 'away'
      },
      people: [
        { text: 'Select One', value: null },
        'Jason', 'Adam', 'Eric', 'Matt'
      ],
      show: true
    }
  }
}
</script>

<style scoped>
#away-time{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.x-close{
  align-self: flex-end;
}
.away-date-inputs{
  margin-top: 20px;
  margin-bottom: 20px;
}
.btn-outline-info{
  width: 75%;
  align-self: center;
  margin-top: 40px;
}
</style>
