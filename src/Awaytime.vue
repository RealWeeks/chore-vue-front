<template>
  <div id="away-time">
    <div class="form-wrapper standard-form">
      <b-form @reset="onReset" v-if="show">

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

        <!-- <div class="btn-wrapper">
          <b-button v-if="!eventTask" type="reset" variant="outline-info">Reset</b-button>
          <b-button v-if="eventTask" @click="onEdit" :class="{'edit-only' : eventTask}" variant="info">Update</b-button>
          <b-button v-else @click="onSubmit" type="submit" variant="info">Submit</b-button>
        </div> -->
      </b-form>
    </div>
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
    }
  },
  computed:{

  },
  data () {
    return {
      form: {
        person: null,
        start: '',
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

</style>
