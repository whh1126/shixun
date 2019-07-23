export default {
    state: {
        count: 0,
        type: 2
    },
    getters: {
        getSex(state) {
            return state.type === 1 ? "男" : "女"
        }
    },
    //同步方法
    mutations: {
        //自定义事件
        add(state, action) {
            state.count++;
            // console.log(state.count)
        },
        del(state, action) {
            state.count--;
        }
    },
    //异步方法
    actions: {
        addAsync(context) {
            console.log(context)
            setTimeout(() => {
                context.commit('add')
            }, 200)
        },
        delAsync(context, action) {
            console.log(action)
            setTimeout(() => {
                context.commit('del')
            }, 200)
        }
    }
}