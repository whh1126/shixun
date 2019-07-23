export default {
    namespaced: true,
    state:{
        total:100
    },
    mutations: {
        addTotal(state,action){
            state.total+=action.total
        }
    },
    actions: {
        addTotalAsync({commit},action){
            commit.addTotal({ total: action.total})
        }
    }
}