import * as types from './mutations-types'

const mutations = {
	// loading
	[types.SET_LOADINGSTATE](state,loadingState) {
		state.loadingState = loadingState
	},

	// goodsNavState
	[types.SET_GOODSNAVSTATE](state, goodsNavState) {
		state.goodsNavState = goodsNavState
	}
}

export default mutations