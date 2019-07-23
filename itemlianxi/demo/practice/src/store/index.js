import Vue from "vue";
import Vuex from "vuex";
import rootMoudule from "../store/rootMoudule";
import modules from "./modules"
Vue.use(Vuex)
const store = new Vuex.Store({

    modules,
    ...rootMoudule
    // state: {
    //     count: 0
    // },
    // mutations: {
    //     add(state){
    //         state.count++
    //     },
    //     del(state){
    //         state.count--;
    //     } 
    // }
})
window.store = store

export default store