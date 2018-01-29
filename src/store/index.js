import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import prompt from './modules/prompt'
import login from './modules/login'
import goodsDetails from './modules/goodsDetails'
import shopDetails from './modules/shopDetails'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
    prompt,
    login,
    goodsDetails,
    shopDetails
  },
	strict: debug,
	plugins: debug ? [createLogger()] : []
})