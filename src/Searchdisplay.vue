<template>
  <div id="search-display">
    <div @click="$emit('closeSearchDisplay')" class="x-close">
      <v-icon name="times"/>
    </div>
    <div class="display-wrapper">
      <div class="card-wrapper" v-for="item in filteredResults" :key="item._id">
        <b-card :title="item.title"
                tag="article"
                style="width: 20rem;"
                class="mb-2">
          <p class="card-text">
            Description: {{item.name}} <br/>
            Start: {{item.start}}
          </p>
          <b-button variant="outline-info">Edit Task</b-button>
          <b-button @click="handleDelete(item)" variant="info">Delete Task</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Notifications from './common/notifications.vue'
export default {
  name: 'search-display',
  props:['json', 'searchTerm'],
  mixins:[Notifications],
  components : {
  },
  created(){
  },
  methods:{
    handleDelete(item){
      this.axios.delete(`http://localhost:3000/events/${item.id}`)
      .then((response)=>{
        this.$store.dispatch('GET_EVENTS')
        this.showSuccessMsg({message: 'Item Removed.'})
      })
      .catch((err)=>{
        this.showErrorMsg({message:'Error removing.'})
      })
    }
  },
  computed:{
    filteredResults(){
      return this.json.filter(x => x.person.toLowerCase().includes(this.searchTerm) || x.start.toLowerCase().includes(this.searchTerm))
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#search-display{
  display: flex;
  flex-direction: column;
}
.display-wrapper{
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-between;
  margin-right: 5%;
}
.card-wrapper{
  text-align: center;
  margin-top: 10px;
}
.card{
  border-color: #00cfaa;
  background-color: transparent;
  color: white;
}
.x-close{
  margin-top: 10px;
    margin-right: 40px;
}
</style>
