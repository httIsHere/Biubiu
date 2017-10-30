import * as url from './urlConfig'
import axios from 'axios'

// banner
export const bannerApi = {
    banner() {
        return axios.get(url.banner).then(res => {
            return res.data
        })
    }
}

// rank
export const rankApi = {
    ranking3() {
        return axios.get(url.ranking3).then(res => {
            return res.data
        })
    }
}