import * as types from '../mutations-types'

const state = {
	shopDetails: {}
}

const getters = {
	shopDetails : state => state.shopDetails
}

const mutations = {
	[types.SET_SHOPDETAILS](state,obj){
		state.shopDetails = obj
	}
}

export default {
  state,
  getters,
  mutations
}