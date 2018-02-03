
import { post, get } from './config'

export default {
  // 获取首页banner
  getBanner (data) {
    return post('api/index/banner_list',data)
  },

  // 获取首页推荐商品
  getHomeGoods () {
    return get('api/Home/dress_pc')
  },
  // 获取一级分类
  getOneLevel () {
    return get('api/Mall/parent_class')
  },
  // 获取商品二级
  getTwoLevel (data) {
    return post('api/Mall/seed_class', data)
  },
  // 获取商品列表
  getGoodsList (data) {
  	return post('api/Mall/searchGoods', data)
  },
  // 获取推荐商品
  getMaybeEnjoy (data) {
    return post('api/Mall/maybeEnjoy', data)
  },
  // 获取商品详情
  getGoodsDetails (data) {
    return post('api/Mall/goods_info', data)
  },
  // 获取选中规格的价格与库存
  getSpecInfo (data) {
    return post('api/Mall/get_specification', data)
  },
  // 商品收藏与取消收藏
  goodsCollection (data) {
    return post('api/Mall/goods_collect', data)
  },
  // 加入购物车
  plusShopCar (data) {
    return post('api/Mall/insertShopCar', data)
  },
  // 获取确认订单商品信息
  getConfirmGoods (type,data) {
    if(type == 1) { // 购物车
      return post('api/Order/confirmOrderInfo', data)
    }else{
      return post('api/Order/confirmGoodsInfo', data)
    }
  },
  // 下单
  submitOrder (data) {
    return post('api/Order/insertMallOrder', data)
  },
  // 获取店铺详情
  getShopDetails (data) {
    return post('api/Mall/merchants_info', data)
  },
  // 店铺收藏与取消收藏
  shopFollow (data) {
    return post('api/User/follow_merchants', data)
  },
  // 获取店铺分类
  getShopClass (data) {
    return post('api/Mall/merchants_class', data)
  },
  // 获取店铺分类下的商品列表
  getShopGoodsList (data) {
    return post('api/Mall/merchants_class_goods', data)
  },
  // 获取店铺导购视频
  getShopGuideVideo (data) {
    return post('api/live/video_list', data)
  },
  // 获取店铺的直播
  getShopLive (data) {
    return post('api/live/merchants_live', data)
  },
  // 获取店铺的录播列表
  getShopPlayback (data) {
    return post('api/live/playback_list', data)
  }
}



