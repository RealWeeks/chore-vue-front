<template>
  <div id="away-time" class="standard-form">
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

        <!-- <div class="btn-wrapper">
          <b-button v-if="!eventTask" type="reset" variant="outline-info">Reset</b-button>
          <b-button v-if="eventTask" @click="onEdit" :class="{'edit-only' : eventTask}" variant="info">Update</b-button>
          <b-button v-else @click="onSubmit" type="submit" variant="info">Submit</b-button>
        </div> -->
      </b-form>

    </div>
    <b-button @click="handleSetAway" variant="outline-info">Set as away</b-button>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import Notifications from './common/notifications.vue'
export default {
  name: 'away-time',
  props:[],
  mixins:[Notifications],
  components : {
    'datepicker': Datepicker
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
