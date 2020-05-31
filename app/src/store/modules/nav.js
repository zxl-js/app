import {
    reqCateNavDatas,
    reqCateLists
} from "../../api"

const state = {
    navDataList: [],
    cateLists: []
}
const mutations = {
    RECEIVE_NAVLIST(state, navDataList) {
        state.navDataList = navDataList
    },
    RECEIVE_CATELISTS(state, cateLists) {
        state.cateLists = cateLists
    }
}
const actions = {
    async getnavDataList({
        commit
    }) {
        const result = await reqCateNavDatas()
        const result1 = result.data.categoryL1List
        // // console.log("-----")
        // console.log(result1)s
        let newArr = []
        for (let i = 0; i < result1.length; i++) {
            newArr[i] = result1[i].name
        }

        const newArr1 = newArr.map(item => ({
            text: item
        }))
        // console.log(newArr1)
        result.data = newArr1
        console.log(result.data)
        if (result.code === 200) {
            // result.data = Array.from(result.data)
            commit('RECEIVE_NAVLIST', result.data)
        }
    },
    async getCateLists({
        commit
    }) {

        let result = await reqCateLists()
        // let result1 = result.data
        // // console.log(result1)
        // let newArr = []
        // // console.log(result1)
        // for (let i = 0; i < result1.length; i++) {
        //     newArr = result1[i]
        // }
        // const newArr2 = newArr

        // for (const key in result1) {
        //     newArr = result1
        // }
        // console.log(newArr)
        // result.data = newArr
        // console.log(result.data)
        // console.log(result.data[4].subCateList[0].id)
        if (result.code === 200) {
            commit('RECEIVE_CATELISTS', result.data)
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

// const result1 = result.data.categoryL1List
// const result2 = result1
// console.log(result2)
// const arr = {}
// for (let i = 0; i < result2.length; i++) {
//     // console.log(result1[i])
//     arr[i] = result2
// }
// console.log(arr)
// // const newArr = arr.map(item => ({
// //     text: item
// // }))
// console.log("----------")
// console.log(newArr)
// console.log(newArr1)