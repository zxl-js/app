import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import './mock/index'
import "./api/index"
import store from "./store"
// import Vant from "vant"
// import Vue from 'vue';a

// Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')