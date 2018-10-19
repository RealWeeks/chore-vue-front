<template>
  <div id="app container">

    <div class="row">
      <navbar @searchInput="handleSearch" class="col-md-12"/>
    </div>

    <div class="row">
      <div :class="[searchTerm ? 'col-md-3' : 'col-md-1']">
        <sidebar/>
      </div>

      <div :class="[searchTerm ? 'col-md-9' : 'col-md-11']">
        <calender v-if="!searchTerm" :json="json" />
        <search-display :searchTerm="searchTerm" :json="json" v-else />
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
export default {
  name: 'app',
  components:{
    'navbar' : Navbar,
    'calender' : Calendar,
    'sidebar' : Sidebar,
    'search-display' : Searchdisplay,
  },
  methods:{
    handleSearch(term){
      this.searchTerm = term
    }
  },
  data () {
    return {
      searchTerm: '',
      json: JSONDATA,
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
