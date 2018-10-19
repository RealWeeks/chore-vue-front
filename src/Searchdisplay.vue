<template>
  <div id="search-display">
    <div class="card-wrapper" v-for="item in filteredResults" :key="item._id">
      <b-card :title="item.title"
              tag="article"
              style="width: 25rem;"
              class="mb-2">
        <p class="card-text">
          Title: {{item.title}} <br/>
          Start: {{item.start}}
        </p>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-display',
  props:['json', 'searchTerm'],
  components : {
  },
  created(){
  },
  computed:{
    filteredResults(){
      return this.json.filter(x => x.title.toLowerCase().includes(this.searchTerm) || x.start.toLowerCase().includes(this.searchTerm))
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
  flex-flow: wrap;
  justify-content: space-between;
  margin-right: 5%;
}
.card-wrapper{
  text-align: center;
}
</style>
