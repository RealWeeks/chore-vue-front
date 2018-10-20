<template>
  <div id="sidebar">
    <div class="card-content">
      <h1 class="headline-txt">Task Assigner...</h1><br/>
      <h3 class="secondary-txt">An easy viewer for roomate tasks</h3><br/>
      <div class="btn-holder">
        <b-button @click="handleEventCreate" variant="outline-info">Create Item</b-button>
        <b-button variant="info">Set Away Dates</b-button>
      </div>
      <div class="search-wrapper">
        <b-form-input size="sm" class="mr-sm-2" type="text" v-model="searchInput" @input="handleInput" placeholder="Type to quick find"/>
      </div>
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
    },
    handleInput(term){
      this.$emit('searchInput', term.toLowerCase())
    }
  },
  created(){
  },
  data () {
    return {
      searchInput:'',
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Montserrat');
#sidebar{
  .card-content{
    height:100%;
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
  }
  .headline-txt{
    color: #00cfaa;
    font-family: 'Montserrat', sans-serif;
  }
  .secondary-txt{
    color: white;
    font-family: 'Lato', sans-serif;
  }
  .search-wrapper{
    margin-top: 15%;
  }
}
</style>
