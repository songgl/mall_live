import { post, get } from './config'

export default {
	// 获取购物车商品列表
	getCarGoods (data) {
		return post('api/Mall/getShopCars', data)
	},
	// 购物车数量加／减
	carGoodsCount (type, data) {
		let api = ''
		if(type == 0) { // 加
			api = 'api/Mall/plusShopCar'
		}else {
			api = 'api/Mall/minusShopCar'
		}
		return post(api, data)
	},
	// 删除购物车商品
	delCarGoods (data) {
		return post('api/Mall/delShopCar', data)
	},
	// 清除无效商品
	delInvalidGoods (data) {
		return post('api/Mall/delInvalidShopCar', data)
	},
	// 获取购物车商品数量
	getCarGoodsNum (data) {
		return post('api/Mall/getShopCarCount', data)
	}
}