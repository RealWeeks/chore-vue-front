<template>
  <div id="create-update" class="standard-form">
    <div class="form-wrapper">
      <b-form @reset="onReset" v-if="show">
        <b-form-group
                    label="Task name"
                    description="Just enter task name and we'll take care of the formatting">
          <b-form-input
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter task">
          </b-form-input>
        </b-form-group>
        <b-form-group
                      label="Date">
          <datepicker v-model="form.start" class="datepicker"></datepicker>
        </b-form-group>
        <b-form-group
                      label="Your Name">
          <b-form-select
                      :options="people"
                      required
                      v-model="form.person">
        </b-form-select>
        </b-form-group>
        <b-form-group
                      label="Desired task">
          <b-form-select
                      :options="tasks"
                      required
                      v-model="form.task">
        </b-form-select>
        </b-form-group>
        <div class="btn-wrapper">
          <b-button v-if="!eventTask" type="reset" variant="outline-info">Reset</b-button>
          <b-button v-if="eventTask" @click="onEdit" :class="{'edit-only' : eventTask}" variant="info">Update</b-button>
          <b-button v-else @click="onSubmit" type="submit" variant="info">Submit</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import Notifications from './common/notifications.vue'
export default {
  name: 'create-update',
  components : {
    'datepicker': Datepicker
  },
  mixins:[Notifications],
  props:['selectedDate', 'eventTask'],
  methods:{
    onEdit(){
      this.axios.put(`http://localhost:3000/events/${this.eventTask._id}`, this.form )
      .then((response)=>{
        this.$store.dispatch('GET_EVENTS')
        this.$emit('closeCreateUpdate')
        this.showSuccessMsg({message: 'Task edited.'})
      })
      .catch((err)=>{
        this.showErrorMsg({message:'error updating'})
        // hide server errors from user
      })
    },
    onSubmit (e) {
      e.preventDefault()
      this.form.start = moment(this.form.start).format('MM-DD-YYYY')
      this.axios.post('http://localhost:3000/events', this.form)
      .then((response)=>{
        if (response.data.error) {
          return Promise.reject(response.data)
        }else{
          this.showSuccessMsg({message: 'Added new task.'})
        }
        this.$store.dispatch('GET_EVENTS')
        this.$emit('closeCreateUpdate')
      })
      .catch((err)=>{
        this.showErrorMsg({message: `${err.error ? err.error: 'Error creating task'}` })
      })
    },
    onReset () {
      this.form.name = ''
      this.form.task = ''
      this.form.person = null
      this.form.start = Date.now()
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true })
    }
  },
  created(){
    this.form.start = Date.now()
  },
  watch:{
    selectedDate(date){
      this.form.start = date
    },
    eventTask(task){
      if(task){
        this.form.name = task.name
        this.form.task = task.task
        this.form.person = task.person
        this.form.start = task.start
      }else{
        this.onReset()
      }
    }
  },
  data () {
    return {
      form: {
        person: null,
        name: '',
        task: '',
        start: '',
        allDay: true
      },
      people: [
        { text: 'Select One', value: null },
        'Jason', 'Adam', 'Eric', 'Matt'
      ],
      tasks: [
        { text: 'Select One', value: null },
        'Kitchen', 'Mail', 'General', 'Trash'
      ],
      show: true
    }
    }
}
</script>

<style lang="scss">
</style>
