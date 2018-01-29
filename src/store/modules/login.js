import * as types from '../mutations-types'

const state = {
	loginState: false, // 状态
	loginModel: false, // 登录model状态
}

const getters = {
	loginState : state => state.loginState,
	loginModel : state => state.loginModel
}

const actions = {
	setLoginModel ({commit}, state){
		commit(types.SETLOGINMODEL, state)
	}
}

const mutations = {
	[types.SET_LOGINSTATE](state,loginState){
		state.loginState = loginState
	},
	[types.SETLOGINMODEL](state,loginModel){
		state.loginModel = loginModel
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}