<template>
  <div class="pageBox thisPage">
    <my-nav @one-level='_oneLevel' @two-level="_twoLevel" :type="2"></my-nav>
    <my-guide @shop-follow='_shopFollow'></my-guide>
    <div class="container thisContainer">
      <div class="product-intro clearfix">
        <preview :img-length="imgLength" v-if="imgLength > 0"></preview>
        <info-wrap></info-wrap>
      </div>
      <div class="clearfix">
        <details-left @shop-follow='_shopFollow'></details-left>
        <details-right></details-right>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '@/api/goods'
import storage from '@/common/storage'

import myNav from '../private/nav'
import myGuide from './private/guide'
import preview from './private/preview'
import infoWrap from './private/infoWrap'
import detailsLeft from './private/detailsLeft'
import detailsRight from './private/detailsRight'

export default {
  data () {
    return {
      goodsDetails: {},
      shopInfo: {},
      imgLength: 0
    }
  },
  methods: {
    ...mapMutations({
      setGoodsDetails: 'SET_GOODSDETAILS',
      setShopDetails: 'SET_SHOPDETAILS'
    }),
    // 获取商品详情
    _getGoodsDetails () {
      api.getGoodsDetails({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        goods_id: this.$route.query.goods_id
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.setGoodsDetails(res.data)
          this.goodsDetails = res.data
          this.imgLength = res.data.imgs.length
          this._getShopDetails(res.data.merchants_id)
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 获取店铺详情
    _getShopDetails (merchants_id) {
      api.getShopDetails({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        merchants_id
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.shopInfo = res.data
          this.setShopDetails(res.data)
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 店铺收藏与取消收藏
    _shopFollow (type) {
      console.log(type)
      api.shopFollow({
        uid: this.getCookie("uid"),
        token: this.getCookie("token"),
        user_id2 : this.shopInfo.member_id
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this._getShopDetails(this.goodsDetails.merchants_id)
          if(type == 1){
            this.promptFun({
              content: '取消收藏成功',
              type: 'success'
            })
          }else{
            this.promptFun({
              content: '恭喜你，收藏成功！',
              type: 'success'
            })
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 一级分类跳转事件
    _oneLevel (item) {
      let levelObj = {
        PaUuid: item.class_uuid,
        paName: item.class_name
      }
      storage.s_setItem('levelObj', levelObj)
      this.$router.push({
        path: 'goodsClass'
      })
    },

    // 二级分类跳转事件
    _twoLevel (paItem,item) {
      let levelObj = {
        PaUuid: paItem.class_uuid,
        paName: paItem.class_name,
        class_uuid: item.class_uuid
      }
      storage.s_setItem('levelObj', levelObj)
      this.$router.push({
        path: 'goodsClass'
      })
    },
  },
  created () {
    this.setGoodsNav(true)
    this._getGoodsDetails()
  },
  components: {
    myNav,
    myGuide,
    preview,
    infoWrap,
    detailsLeft,
    detailsRight
  }
}
</script>

<style scoped>
  .thisPage{
    background-color: #fff;
  }
  .thisContainer{
    padding-bottom: 40px;
    border-bottom: 1px solid #e5e5e5;
  }
  .product-intro{
    position: relative;
    margin: 10px 0;
  }
</style>
