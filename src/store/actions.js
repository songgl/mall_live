import * as types from './mutations-types'

// 设置loadingState
export const setLoading = function ({commit,state}, loadingState) {
	commit(types.SET_LOADINGSTATE,loadingState)
}

// 设置goodsNavState
export const setGoodsNavState = function ({commit, state}, goodsNavState) {
	commit(types.SET_GOODSNAVSTATE, goodsNavState)
}

