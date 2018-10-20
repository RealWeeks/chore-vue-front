<template>
  <div id="app container">

    <div class="row">
      <navbar @searchInput="handleSearch" class="col-md-12"/>
    </div>

    <div class="row">
      <div :class="[searchTerm || showCreate ? 'col-md-3' : 'col-md-1']">
        <sidebar @createEvent="createEvent"/>
      </div>

      <div :class="[searchTerm || showCreate ? 'col-md-9' : 'col-md-11']">
        <calender v-if="showCalComponent" :json="events" />
        <search-display :searchTerm="searchTerm" :json="events" v-else-if="!showCreate" />
        <create-update v-else />
      </div>
    </div>


  </div>
</template>

<script>
import JSONDATA from './assets/chore-calendar.json';
import Navbar from './navbar.vue'
import Sidebar from './sidebar.vue'
import Calendar from './Calendar.vue'
import Searchdisplay from './Searchdisplay.vue'
import Createupdate from './Createupdate.vue'
export default {
  name: 'app',
  components:{
    'navbar' : Navbar,
    'calender' : Calendar,
    'sidebar' : Sidebar,
    'search-display' : Searchdisplay,
    'create-update' : Createupdate,
  },
  created(){
    this.$store.dispatch('GET_EVENTS')
  },
  computed:{
    showCalComponent(){
      return !this.searchTerm && !this.showCreate && this.events.length > 0
    },
    events(){
      return this.$store.state.events
    }
  },
  methods:{
    handleSearch(term){
      this.searchTerm = term
    },
    createEvent(){
      this.showCreate = !this.showCreate
    }
  },
  data () {
    return {
      searchTerm: '',
      // json: JSONDATA,
      showCreate:false,
    }
  }
}
</script>

<style lang="scss">
#app{
  display: flex;
  flex-direction: column;
}
</style>
