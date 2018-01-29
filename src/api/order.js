import { post, get } from './config'

export default {
	// 获取订单详情
	getOrderDetails (data) {
		return post('api/Order/queryOrderView', data)
	}
}