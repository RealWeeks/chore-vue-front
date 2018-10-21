<template>
  <div id="navbar">
    <b-navbar toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" v-model="searchInput" @input="handleInput" placeholder="Search"/>
          <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
        </b-nav-form>

        <!-- <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods:{
    handleInput(term){
      this.$emit('searchInput', term.toLowerCase())
    }
  },
  watch:{
  },
  data () {
    return {
      searchInput:''
    }
  }
}
</script>

<style lang="scss">
#navbar{
  padding: 0;
  background-color: #1a2a33 !important;
}
</style>
