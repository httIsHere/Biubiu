import { bannerApi } from '../../api'

const rcmdInfo = {
    state: {
        bannerData:[],
        aha: 'test',
        biu: [1]
    },
    getters: {
        getBannerData: state => state.bannerData,
        getAha: state => state.aha,
        getBiu: state => state.biu
    },
    mutations: {
        setBannerData: (state) => {
            console.log('loading...')
        },
        setBannerSuccess: (state, obj) => {
            //console.log(obj)
            state.bannerData = obj.data
            state.biu = obj.data
            //console.log(state.bannerData)
        },
        setBannerFailed: (state, obj) => {
            console.log('fail...')
        }
    },
    actions: {
        set_BannerData: ({commit, state, rootState}) => {
            rootState.requesting = true
            commit('setBannerData')
            bannerApi.banner().then(res => {
                rootState.requesting = false
                commit('setBannerSuccess', res)
            }, error => {
                rootState.requesting = false
                commit('setBannerFailed')
            })
        }
    }
}
export default rcmdInfo