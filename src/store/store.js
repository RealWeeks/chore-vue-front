import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    events: [],
  },
  mutations: {
    GET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    GET_EVENTS ({ commit }) {
      axios.get('http://localhost:3000/events')
      .then((response)=>{
        if (response.status === 200) {
          let idPreserve = response.data.map((x)=>{
            x.id = x._id;
            return x
          })
          // vuex overrides _id, touch it to keep
          commit('GET_EVENTS', response.data)
        }else{
          // handle error
        }
      })
      .catch((err)=>{
        debugger
      })

    }
  }
})
