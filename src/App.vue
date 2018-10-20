<template>
  <div id="app" class="container-fluid">

    <!-- <div class="row">
      <navbar @searchInput="handleSearch" class="col-md-12"/>
    </div> -->

    <div class="row main-contents">
      <div class="col-md-5 set-colors">
        <sidebar @searchInput="handleSearch" @showAway="showAway" @createEvent="createEvent"/>
      </div>

      <div class="col-md-7 set-colors">
        <calender v-if="showCalComponent" :json="events" />
        <search-display :searchTerm="searchTerm" :json="events" v-else-if="!showCreate && !showAwayForm" />
        <away-time v-else-if="showAwayForm" />
        <create-update class="add-top-margin" v-else />
      </div>
    </div>


  </div>
</template>

<script>
// import JSONDATA from './assets/chore-calendar.json';
import Navbar from './navbar.vue'
import Sidebar from './sidebar.vue'
import Calendar from './Calendar.vue'
import Searchdisplay from './Searchdisplay.vue'
import Createupdate from './Createupdate.vue'
import Awaytime from './Awaytime.vue'
export default {
  name: 'app',
  components:{
    'navbar' : Navbar,
    'calender' : Calendar,
    'sidebar' : Sidebar,
    'search-display' : Searchdisplay,
    'create-update' : Createupdate,
    'away-time' : Awaytime,
  },
  created(){
    this.$store.dispatch('GET_EVENTS')
  },
  computed:{
    showCalComponent(){
      return !this.searchTerm && !this.showCreate && this.events.length > 0 && !this.showAwayForm
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
    },
    showAway(){
      this.showAwayForm = !this.showAwayForm
    }
  },
  data () {
    return {
      searchTerm: '',
      // json: JSONDATA,
      showCreate:false,
      showAwayForm: false,
    }
  }
}
</script>

<style lang="scss">
html, body, #container, #app{
  height:100% !important;
  min-height:100% !important;
}
#app{
  display: flex;
  flex-direction: column;
}
.add-top-margin{
  margin-top: 25px;
}
.btn-outline-info{
  color: white;
  background-color: transparent;
  background-image: none;
  border-color: #00cfaa;
}
.btn-info{
  color: #fff;
  background-color: #00cfaa;
  border-color: #17a2b8;
}
.btn-holder{
  display: flex;
  justify-content: space-around;
  .btn{
    width: 40%;
  }
}
.set-colors{
  // green: #00cfaa
  // dark blue #1a2a33
  // gray #757575

  background-color: #1a2a33 !important;
}
.main-contents{
  min-height: 750px;
}
#calendar{
  .comp-full-calendar{
    margin: 0 !important;
    padding: 0 !important;
  }
  .full-calendar-header{
    background-color: #97e2d58c !important;
  }
}
.standard-form{
  // margin-top: 5%;
  display: flex;
  justify-content: center;
  color: #00d0aa;
  background-color: #1a2a33;
  .datepicker input{
    width: 100%;
    height:calc(2.25rem + 2px);
  }
  .edit-only{
    width:100% !important;
    margin-bottom: 15px;
  }
  .form-wrapper{
    display: flex;
    justify-content: center;
  }
  .btn-wrapper{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    .btn{
      width:50%;
    }
  }
}
</style>
