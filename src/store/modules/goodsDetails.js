import * as types from '../mutations-types'

const state = {
	goodsDetails: {}
}

const getters = {
	goodsDetails : state => state.goodsDetails
}

const mutations = {
	[types.SET_GOODSDETAILS](state,obj){
		state.goodsDetails = obj
	}
}

export default {
  state,
  getters,
  // actions,
  mutations
}