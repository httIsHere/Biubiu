const leftBar = {
    state: {
        showLeftBar: false
    },
    getters: {
        getShowLeftBar: state => state.showLeftBar
    },
    mutations: {
        showLeftBar: (state) => {
            state.showLeftBar = true
        },
        hideLeftBar: state => {
            state.showLeftBar = false
        }
    }, 
    actions: {
        ShowLeftBar: ({commit}) => {
            commit('showLeftBar')
        },
        HideLeftBar: ({commit}) => {
            commit('hideLeftBar')
        }
    }
}