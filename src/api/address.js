import { post, get } from './config'

export default {
	// 添加／修改 地址
  add_editAddress (type,data) {
    if(type == 1){ // 添加
      return post('api/Address/insertAddress', data)
    }else{ // 修改
      return post('api/Address/saveAddress', data)
    }
  },
  // 删除地址
  delAddress (data) {
    return post('api/Address/delAddress', data)
  },
  // 设置默认地址 
  setDefalutAddress (data) {
    return post('api/Address/saveDefaultAddress', data)
  },
  // 获取地址列表
  getAddressList (data) {
    return post('api/Address/queryAddressList', data)
  },
  // 查询默认地址
  getDefalutAddress (data) {
    return post('api/Address/queryDefaultAddress', data)
  }
}