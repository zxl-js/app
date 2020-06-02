import axios from "axios"

const ajax = axios.create({
    baseURL: "/topic",
    timeOut: 20000
})
ajax.interceptors.request.use(config => {
    // console.log("-- -- -- -- -")
    // 请求的时候显示进度条
    // Nprogress.start()  // 显示请求进度 
    // config.headers.userTempId = store.state.user.userTempId

    // const token = store.state.user.userInfo.token
    // if(token){
    //     config.headers['token'] = token
    // }
    return config
})


ajax.interceptors.response.use(response => {
    // Nprogress.done() //响应时隐藏进度条
    return response.data //将响应成功后的数据返回
}, error => {
    // Nprogress.done() //响应失败隐藏进度条
    // alert("请求出错"+error.message||"未知错误")
    return Promise.reject(error) //返回失败的Promise 
})
export default ajax