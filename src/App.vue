<template>
  <div id="app container">

    <div class="row">
      <navbar class="col-md-12"/>
    </div>

    <div class="row">
      <div class="col-md-1">
        <sidebar/>
      </div>

      <div class="col-md-11">
        <calender/>
      </div>
    </div>


  </div>
</template>

<script>
import Navbar from './navbar.vue'
import Sidebar from './sidebar.vue'
import Calendar from './Calendar.vue'
export default {
  name: 'app',
  components:{
    'navbar' : Navbar,
    'calender' : Calendar,
    'sidebar' : Sidebar,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
