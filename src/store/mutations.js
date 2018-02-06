import * as types from './mutations-types'

const mutations = {
	// loading
	[types.SET_LOADINGSTATE](state,loadingState) {
		state.loadingState = loadingState
	},

	// goodsNavState
	[types.SET_GOODSNAVSTATE](state, goodsNavState) {
		state.goodsNavState = goodsNavState
	},

	// orderType
	[types.SET_ORDERTYPE](state, type) {
		state.orderType = type
	}
}

export default mutations