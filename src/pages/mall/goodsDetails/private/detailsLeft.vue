<template>
  <div class="box">
    <div class="shopDetails">
      <div class="shopName" v-text="shopDetails.merchants_name"></div>
      <div class="scoreBox clearfix">
        <div class="scoreItem">
          <div class="branch" v-text="shopDetails.merchants_star1"></div>
          <div>商家评分</div>
        </div>
        <div class="scoreItem cen">
          <div class="branch" v-text="shopDetails.merchants_star2"></div>
          <div>商品评分</div>
        </div>
        <div class="scoreItem">
          <div class="branch" v-text="shopDetails.merchants_star3"></div>
          <div>物流评分</div>
        </div>
      </div>
      <div class="shopBtnBox clearfix">
        <div class="btnItem">
          <router-link :to="{path: 'shopDetails', query:{merchants_id: shopDetails.merchants_id}}" class="shopBtn joinShop">进店逛逛</router-link>
        </div>
        <div class="btnItem">
          <div class="shopBtn" :class="[shopDetails.is_follow == 1 ? 'on' : 'off']" @click="shopFollow">收藏店铺</div>
        </div>
      </div>
    </div>
    <div class="recommendTxt">推荐商品</div>
    <goods-item :goods-info='item' v-for="item in goodsList" :key="item.goods_id" class="goodsItem"></goods-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api/goods'
import goodsItem from '@/components/goodsItem/goodsItem'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  computed: {
    ...mapGetters([
      'shopDetails'
    ])
  },
  methods: {
    // 获取推荐商品列表
    _getMaybeEnjoy () {
      api.getMaybeEnjoy({
        pagesize: 5
      })
      .then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.goodsList = res.data
        }else if(res.status === 'error'){
          this.promptFun({
            contnent: res.data,
            type: 'error'
          })
        }
      })
    },
    // 收藏按钮点击事件
    shopFollow () {
      this.$emit('shop-follow', this.shopDetails.is_follow)
    }
  },
  created () {
    this._getMaybeEnjoy()
  },
  components: {
    goodsItem
  }
}
</script>

<style scoped>
  .box{
    width: 250px;
    float: left;
  }
  .shopDetails{
    border: 1px solid #e5e5e5;
  }
  .shopName{
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .scoreBox{
    padding: 20px 0;
  }
  .scoreItem{
    float: left;
    width: 33.3%;
    padding: 10px;
    text-align: center;
  }
  .branch{
    padding-bottom: 10px;
    color: red;
  }
  .scoreItem.cen{
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
  }
  .shopBtnBox{
    padding-bottom: 20px;
  }
  .btnItem{
    width: 50%;
    padding: 0 10px;
    float: left;
  }
  .shopBtn{
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    text-align: center;
    position: relative;
    padding-left: 20px;
    display: block;
    cursor: pointer;
  }
  .joinShop:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/dp2.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 14px;
    bottom: 6px;
    left: 10px;
  }
  .off:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/sc.png) no-repeat center;
    background-size: cover;
    width: 18px;
    height: 18px;
    bottom: 5px;
    left: 10px;
  }
  .on:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/sc2.png) no-repeat center;
    background-size: cover;
    width: 18px;
    height: 17px;
    bottom: 5px;
    left: 10px;
  }
  .recommendTxt{
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
    text-align: center;
    border: 1px solid #e5e5e5;
    margin-top: 20px;
  }
  .goodsItem{
    border: 1px solid #e5e5e5;
    border-top: none;
  }
</style>
