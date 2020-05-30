import mockAjax from "./mockAjax"


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