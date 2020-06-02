import mockAjax from "./mockAjax"
import ajax from "./ajax"

export const reqCateLists = () => mockAjax.get("/cateLists")
export const reqCateNavDatas = () => mockAjax.get("/cateNavDatas")
export const reqIndexcateModule = () => mockAjax.get("/indexCateModule")
export const reqProductList = () => mockAjax.get("/productList")
// reqCateNavDatas().then((req) => {
//     console.log("---")
//     console.log(req)
// })

// reqCateLists().then((req) => {
//     console.log("__________________")
//     console.log(req)
// })
// reqIndexcateModule().then((req) => {
//     console.log("----------")
//     console.log(req)
// })
// reqProductList().then((req) => {
//     console.log("----------____")
//     console.log(req)
// })
// v1/find/recAuto.json
export const reqBuynavList = () => ajax.get("/v1/know/navWap.json")
// export const reqBuynavList = () => ajax.get("")

// reqBuynavList().then((req) => {
//     console.log("----------____")
//     console.log(req)
// })
export const reqWaterfallhome = () => ajax.get("v1/find/recAuto.json")

// iv.https://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=1

export const reqWaterfallhome2 = (page, size) => ajax.post(`v1/find/recAuto.json?page=${page}&size=${size}`)