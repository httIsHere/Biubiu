const rcmdInfo = {
    state: {
        bannerData:[]
    },
    getters: {
        getBannerData: state => state.bannerData
    },
    mutations: {
        setBannerData: (state, obj) => {
            state.bannerData = obj
        }
    },
    actions: {
        set_BannerData: ({commit}, obj) => {
            commit('setBannerData', obj)
        }
    }
}
export default rcmdInfo