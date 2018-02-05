import { post, get } from './config'

export default {
  // 获取商品收藏信息
  getUserGoodsCollection (data) {
    return post('api/Mall/collect',data)
  },
  // 修改用户信息
  editUserInfo (data) {
    return post('api/user/edit_user',data)
  }

}



