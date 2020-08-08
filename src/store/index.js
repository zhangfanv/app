import Vue from 'vue';
import Vuex from 'vuex';
import mutation_types from './mutation-types'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1  //响应式的
    },
    getters: {  // 调用方法时 不换成， 直接调用不加（）会使用缓存
        doneTodos: state => {
            return state.count
        }
    },
    mutations: {
        // 提交的同步事务
        [mutation_types.INCREMENT](state) {
            // 变更状态
            state.count++
        }
    },
    actions: {
        // 通过store.dispatch('increment')触发
        [mutation_types.INCREMENT](context) {
            context.commit(mutation_types.INCREMENT)
        }
    },
    strict: process.env.NODE_ENV !== 'production'  // 发布的时候需要关闭（其实深度检测不合规对象变化）
})

export default store;