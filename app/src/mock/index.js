import Mock from "mockjs"

import cateLists from "./cateLists.json"

import cateNavDatas from "./cateNavDatas.json"

import productList from "./productList.json"
import indexCateModule from "./indexCateModule.json"
console.log(indexCateModule)


Mock.mock("/mock/cateLists", {
    code: 200,
    message: '成功',
    data: cateLists
})

Mock.mock("/mock/cateNavDatas", {
    code: 200,
    message: '成功',
    data: cateNavDatas
})
Mock.mock("/mock/indexCateModule", {
    code: 200,
    message: '成功',
    data: indexCateModule
})
Mock.mock("/mock/productList", {
    code: 200,
    message: '成功',
    data: productList
})
// console.log("456789")