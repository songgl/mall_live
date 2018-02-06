import { post, get } from './config'

export default {
  // 获取商品收藏信息
  getUserGoodsCollection (data) {
    return post('api/Mall/collect',data)
  },
   // 获取我的关注(店铺)信息
  getUserMerchantsCollection (data) {
    return post('api/User/user_follow',data)
  },
  // 取消关注信息
  cancelCollect (data) {
    return post('api/User/del_user_follow',data)
  },
  // 修改用户信息
  editUserInfo (data) {
    return post('api/user/edit_user',data)
  }

}



