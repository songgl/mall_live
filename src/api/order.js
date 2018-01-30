import { post, get } from './config'

export default {
	// 获取订单列表
	getOrderList (data) {
		return post('api/Order/queryOrderByState', data)
	},
<<<<<<< HEAD
	// test
	getTest () {
		console.log(222)
	},
    getTest222 () {
		console.log(222)
	},

=======
>>>>>>> f85c18b04a0537b8e32e1bf98678e353b0d518d8
	// 获取订单详情
	getOrderDetails (data) {
		return post('api/Order/queryOrderView', data)
	}
}