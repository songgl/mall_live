import { post, get } from './config'

export default {
  // 获取商品收藏信息
  getUserGoodsCollection (data) {
    return post('api/Mall/collect',data)
  }
}



