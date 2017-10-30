import Vue from 'vue'
import Vuex from 'vuex'
import rcmd from './modules/recommend'
import leftBar from './modules/leftBar'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        allInfo: [],
        user: {},
        currentView: 0,
        requesting: false,
        error: {}
    },
    getters: {
        getAllInfo: state => state.allInfo,
        getUserInfo: state => state.user,
        getCurrentView: state => state.currentView,
        requesting: state => state.requesting,
        error: state => state.error
    },
    mutations: {
        setAllInfo: (state, obj) => {
            state.allInfo = obj
        },
        setUserInfo: (state, obj) => {
            state.user = obj
        },
        setCurrentView: (state, now) => {
            state.currentView = now
        }
    },
    actions: {
        set_AllInfo: ({commit}, obj) => {
            commit('setAllInfo', obj)
        },
        set_UserInfo: ({commit}, obj) => {
            commit('setUserInfo', obj)
        },
        set_CurrentView: ({commit}, now) => {
            commit('setCurrentView', now)
        }
    },
    modules: {
        rcmd,
        leftBar
    }
})

export default store