import {
    reqProductList
} from '@/api'

const state = {
    homeDataList: []
}
const mutations = {
    RECEIVE_HOMELIST(state, homeDataList) {
        state.homeDataList = homeDataList
    }
}
const actions = {
    async gethomeDataList({
        commit
    }) {
        const result = await reqProductList()
        console.log("-----")
        console.log(result.data)
        if (result.code === 200) {

            commit('RECEIVE_HOMELIST', result.data)
        }
    }
}
const getters = {

}
export default {
    getters,
    actions,
    mutations,
    state
}