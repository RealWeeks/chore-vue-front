<template>
  <div id="away-time">
    <div class="form-wrapper standard-form">
      <b-form @reset="onReset" v-if="show">
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
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'away-time',
  props:[],
  components : {
    'datepicker': Datepicker
  },
  created(){
  },
  methods:{
    onReset () {
      this.form.person = null
      this.form.start = Date.now()
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true })
    },
    handleSetAway(){

    }
  },
  computed:{

  },
  data () {
    return {
      form: {
        person: null,
        start: '',
        end:''
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
