<template>
  <div id="create-update">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                      label="Date:">
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



        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'create-update',
  components : {
    'datepicker': Datepicker
  },
  props:['selectedDate'],
  methods:{
    onSubmit (e) {
      e.preventDefault()
      this.form.start = moment(this.form.start).format('MM-DD-YYYY')
      this.axios.post('http://localhost:3000/events', this.form)
      .then((response)=>{
        this.$store.dispatch('GET_EVENTS')
        this.$emit('closeCreateUpdate')
      })
      .catch((err)=>{
        debugger
      })
    },
    onReset (e) {
      e.preventDefault();
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
#create-update{
  margin-top: 5%;
  max-width: 90%;
  .datepicker input{
    width: 100%;
    height:calc(2.25rem + 2px);
  }
}
</style>
