import { post, get } from './config'

export default {
	// 下单支付
	orderPay (data) {
		return post('api/Pingxx/ping1',data)
	},
	// 下单支付获取订单信息
	getOrderPayDetails (data) {
		return post('api/Order/getOrderView', data)
	},
	// 获取订单列表
	getOrderList (data) {
		return post('api/Order/queryOrderByState', data)
	},
	// 获取订单详情
	getOrderDetails (data) {
		return post('api/Order/queryOrderView', data)
	},
	// 获取物流详情
	getLogDetails (data) {
		return post('api/Express/getTracesByJson', data)
	},
	// 取消订单
	cancelOrder (data) {
		return post('api/Order/cancelOrder', data)
	},
	// 收货订单
	receiveOrder (data) {
		return post('api/Order/receiveOrder', data)
	},
	// 删除订单
	deleteOrder (data) {
		return post('api/Order/delOrder', data)
	}
}