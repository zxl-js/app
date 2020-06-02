import {
    reqBuynavList,
    reqWaterfallhome,
    reqWaterfallhome2
} from "@/api"

const state = {
    BuynavList: [],
    Waterfall: [],
    WaterfallList: []

}
const mutations = {
    RECEIVE_BUYNAV(state, BuynavList) {

        state.BuynavList = BuynavList
    },
    RECEIVE_WATERFALLDATA(state, Waterfall) {
        state.Waterfall = Waterfall
    },
    RECEIVE_WATERFALLDATA2(state, WaterfallList) {
        // console.log("1111")
        // console.log(WaterfallList)
        state.WaterfallList = WaterfallList
    }
}
const actions = {
    async getWaterfallhome2({
            commit
        },
        page
        // size
    ) {
        const result = await reqWaterfallhome2(
            page,
            3
        )
        const result1 = [...result.data.result[0].topics]
        console.log("-------")
        console.log(result1)
        if (result.code == 200) {
            // console.log("123456789")

            commit("RECEIVE_WATERFALLDATA2", result1)
        }
    },
    // 导航数据
    async getBuynavList({
        commit
    }) {
        const result = await reqBuynavList()


        if (result.code == 200) {
            // console.log(result)
            // console.log("999")
            // console.log(result.data)
            // console.log(result.data.kingKongModule)
            // result.data = result.data.kingKongModule
            commit('RECEIVE_BUYNAV', result.data)
        }
    },
    async getWaterfallhome({
        commit
    }) {
        const result = await reqWaterfallhome()
        console.log("--")
        console.log(result.data)
        if (result.code == 200) {
            commit("RECEIVE_WATERFALLDATA", result.data)
        }
    },

}
const getters = {

}
export default {
    getters,
    actions,
    mutations,
    state
}