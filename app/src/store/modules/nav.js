import {reqCateNavDatas} from "../../api"

const state = {
    navDataList: []
}
const mutations = {
    RECEIVE_NAVLIST(state, navDataList) {
        state.navDataList = navDataList
    }
}
const actions = {
    async getnavDataList({
        commit
    }) {
        const result = await reqCateNavDatas()
        console.log("-----")
        console.log(result.data)
        if (result.code === 200) {

            commit('RECEIVE_NAVLIST', result.data)
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