import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import state from "./state"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
import modules from "./modules"
export default new Vuex.Store({
    getters,
    actions,
    modules,
    mutations,
    state
})