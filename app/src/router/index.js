import Vue from "vue"

// 引入路由
import VueRouter from "vue-router"

// 引入路由组件
import routers from "./router"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: routers,
})
// console.log(router)
export default router