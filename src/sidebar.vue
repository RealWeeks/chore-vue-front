<template>
  <div id="sidebar">
      <div>
        <b-nav vertical class="w-25">
          <b-nav-item @click="handleEventCreate"><b-button variant="success">Create Item</b-button></b-nav-item>
          <b-nav-item><b-button variant="info">Reassign Item</b-button></b-nav-item>
          <b-nav-item><b-button variant="info">Set Away Dates</b-button></b-nav-item>
          <b-nav-item><b-button variant="danger">Remove Item</b-button></b-nav-item>
          <b-nav-item disabled><b-button variant="outline-success">Do a trick</b-button></b-nav-item>
        </b-nav>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  components : {
  },
  methods:{
    handleEventCreate(){
      this.$emit('createEvent')
    }
  },
  created(){
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
