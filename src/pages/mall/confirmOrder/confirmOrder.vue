<template>
  <div class="pageBox">
    <my-header></my-header>
    <div class="thisPage">
      <div class="thisContainer">
        <flow-path></flow-path>
        <order-address @on-selected="getThisAddress"></order-address>
        <div class="orderDescBox">
          <h2>确认订单信息</h2>
          <div class="buy-th clearfix">
            <div class="buy-td td-0">店铺宝贝</div>
            <div class="buy-td td-1">商品属性</div>
            <div class="buy-td td-2">单价</div>
            <div class="buy-td td-3">数量</div>
            <div class="buy-td td-4">小计</div>
          </div>
        </div>
        <!-- 店铺列表项 -->
        <div class="orderInfoBox" v-for="(shop, paIndex) in confirmOrderInfo.list" :key="shop.merchants_id">
          <div class="orderShopBox">
            <img class="shopImg" :src="shop.merchants_img" alt="">
            <span>店铺:</span>
            <router-link :to="{path: 'shopDetails', query:{merchants_id: shop.merchants_id}}" v-text="shop.merchants_name"></router-link>
          </div>
          <!-- 商品列表项 -->
          <div class="orderGoods-item clearfix" v-for="goods in shop.goods">
            <div class="goodsItem-td td-0">
              <router-link :to="{path: 'goodsDetails', query: {goods_id: goods.goods_id}}" class="clearfix">
                <div class="goodsImg">
                  <img :src="goods.goods_img" alt="" />
                </div>
                <div class="goodsName" v-text="goods.goods_name"></div>
              </router-link>
            </div>
            <div class="goodsItem-td td-1 td-center" v-text="goods.specification_names"></div>
            <div class="goodsItem-td td-2 td-center">¥<em v-text="goods.goods_now_price"></em></div>
            <div class="goodsItem-td td-3 td-center" v-text="goods.goods_num"></div>
            <div class="goodsItem-td td-4 td-center">¥<em v-text="goods.goods_num * goods.goods_now_price"></em></div>
          </div>
          <div class="memoBox">
            <div class="order-memo">
              <label class="memoTitle">给卖家留言：</label>
              <div class="memoDetail">
                <textarea v-model="orderJson.orderBeans[paIndex].order_remark" maxlength="200" placeholder="请输入您的留言"></textarea>
                <p class="">200字</p>
              </div>
            </div>
          </div>
          <div class="shopSubtotal">
            店铺合计：<span>¥<em v-text="shop.totalPrice"></em></span>
          </div>  
        </div>
        <div class="payInfoBox">
          <div class="payInfo-wrap">
            <div class="payInfo-shadow">
              <div class="realPay">
                <span>实付款：</span>
                <span class="real-price">¥<em v-text="confirmOrderInfo.amount"></em></span>
              </div>
              <div class="payInfo-address" v-show="thisAddressInfo.address_id">
                <div class="addr">
                  <span class="addrTitle">寄送至:</span>
                  <span class="addrDetail" v-text="thisAddressInfo.address_province"></span>
                  <span class="addrDetail" v-text="thisAddressInfo.address_city"></span>
                  <span class="addrDetail" v-text="thisAddressInfo.address_country"></span>
                  <span class="addrDetail" v-text="thisAddressInfo.address_detailed"></span>
                </div>
                <div class="addr-user">
                  <span class="addrTitle">收货人:</span>
                  <span v-text="thisAddressInfo.address_name"></span>
                  <span v-text="thisAddressInfo.address_mobile"></span>
                </div>
              </div>
              <div class="isNotAddress" v-show='!thisAddressInfo.address_id'>
                您还没有选择收货地址
              </div>
            </div>
          </div>
        </div>
        <div class="submitBtnBox">
          <div v-show="thisAddressInfo.address_id" class="btn-wrap on" @click="submitOrder">提交订单</div>
          <div v-show="!thisAddressInfo.address_id" class="btn-wrap off">提交订单</div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import api from '@/api/goods'
import storage from '@/common/storage'
import myHeader from '@/components/header/header'
import myFooter from '@/components/footer/footer'
import flowPath from './private/flowPath'
import orderAddress from './private/orderAddress'
export default {
  data () {
    return {
      confirmOrderInfo: {},
      thisAddressInfo: {},
      orderJson:{
        member_id: this.getCookie("uid"),
        address_id: "", // 地址ID
        deduct_integral_value: "", // 抵扣积分
        coupon_ids: "", // 优惠券id,有多个用‘,’分隔
        orderBeans:[]
      }
    }
  },
  methods: {
    // 获取选中的地址信息
    getThisAddress (item) {
      this.thisAddressInfo = item
      this.orderJson.address_id = item.address_id
    },
    // 获取确认订单商品信息(单)
    _getConfirmGoods () {
      let paramObj = {
        uid: this.getCookie('uid'),
        token: this.getCookie('token')
      }
      let type = null
      if(this.$route.query.car_ids){
        type = 1
        paramObj.car_ids = this.$route.query.car_ids
      }else{
        type = 2
        paramObj.goods_id = storage.s_getItem('confirmOrder').goods_id
        paramObj.goods_num = storage.s_getItem('confirmOrder').goods_num
        paramObj.specification_id = storage.s_getItem('confirmOrder').specification_id
      }
      api.getConfirmGoods(type, paramObj)
      .then(res => {
        if(res.status === 'ok'){
          this.confirmOrderInfo = res.data
          /*循环数据为orderJson赋值*/
          for(let i = 0; i < res.data.list.length; i++){
            let merchantsObj = {
              merchants_id: res.data.list[i].merchants_id, // 商家ID
              order_type: "", // 订单类型
              order_remark: "", // 订单备注
              member_group_id: "", // 团购下单 需传值 用户开团主键
              orderGoodsBeans: []
            };
            this.orderJson.orderBeans.push(merchantsObj);
            for(let j = 0; j < res.data.list[i].goods.length; j++){
              let goodsItem = res.data.list[i].goods
              let goodsObj = {
                goods_id: goodsItem[j].goods_id, // 商品ID
                specification_id: goodsItem[j].specification_id, // 规格ID
                goods_num: goodsItem[j].goods_num, //购买数量
                goods_group_id: ""  // 团购下单ID
              }
              this.orderJson.orderBeans[i].orderGoodsBeans.push(goodsObj);
            }
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },

    // 提交订单
    submitOrder () {
      api.submitOrder({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        json: JSON.stringify(this.orderJson),
        car_ids: this.$route.query.car_ids || ''
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.$router.replace({
            path: 'orderPay',
            query: {
              order_no: res.data.order_no,
              payType: '1'
            }
          })
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    }

  },
  created () {
    this._getConfirmGoods()
  },
  components: {
    myHeader,
    myFooter,
    flowPath,
    orderAddress
  }
}
</script>

<style scoped>
  .thisPage{
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .thisContainer{
    min-height: 400px;
    padding-bottom: 60px;
    width: 990px;
    margin: auto;
  }

  .orderDescBox h2{
    line-height: 25px;
    font-size: 14px;
  }
  .buy-th{
    margin-top: 15px;
    color: #6C6C6C;
    font-weight: 700;
  }
  .buy-td{
    float: left;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-bottom: 3px solid #b2d1ff;
    font-size: 12px;
    margin-left: 1px;
    vertical-align: bottom;
  }
  .goodsItem-td{
    float: left;
    margin-left: 1px;
  }
  .td-0{
    width: 300px;
    margin-left: 0;
  }
  .td-1{
    width: 200px;
  }
  .td-2, .td-3{
    width: 153px;
  }
  .td-4{
    width: 180px;
  }
  .orderShopBox {
    position: relative;
    margin-top: 25px;
    border-bottom: 1px dotted #80b2ff;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    font-weight: 450;
  }
  .shopImg{
    width: 16px;
    height: 16px;
    margin-right: 6px;
    vertical-align: sub;
    position: relative;
  }
  .orderShopBox a:hover{
    color: red;
  }
  .orderGoods-item{
    border-bottom: 1px dotted #ddd;
    background-color: #fbfcff;
  }
  .goodsImg{
    width: 50px;
    height: 50px;
    float: left;
    margin: 10px;
  }
  .goodsName{
    float: left;
    max-width: 70%;
    font-size: 12px;
    margin-top: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .td-center{
    text-align: center;
    padding: 20px;
  }
  .memoBox{
    width: 100%;
    
    background: #f2f7ff;
  }
  .order-memo{
    width: 500px;
    height: 110px;
    padding: 10px;
  }
  .memoTitle{
    display: inline-block;
    vertical-align: top;
    font-weight: 450;
    font-size: 12px;
  }
  .memoDetail{
    display: inline-block;
  }
  .memoDetail textarea{
    font-size: 12px;
    border: 1px solid #e5e5e5;
    padding: 0 5px;
    width: 300px;
    height: 60px;
  }
  .memoDetail p{
    font-size: 12px;
    text-align: right;
  }
  .shopSubtotal{
    height: 45px;
    line-height: 45px;
    background-color: #f2f7ff;
    border-top: 1px solid #fff;
    text-align: right;
    padding-right: 20px;
  }
  .shopSubtotal span{
    color: red;
    font-size: 20px;
  }
  .payInfoBox{
    margin-top: 15px;
    text-align: right;
  }
  .payInfo-wrap{
    display: inline-block;
    border: 1px solid red;
  }
  .payInfo-shadow{
    border: 3px solid #fff0e8;
    min-width: 230px;
    padding: 10px 10px 10px 20px;
  }
  .realPay{
    font-size: 12px;
    color: #333;
    font-weight: 700;
  }
  .real-price{
    color: red;
  }
  .real-price em{
    color: #f40;
    font: 700 26px tahoma;
    padding-left: 5px;
  }
  .payInfo-address{
    line-height: 1.6;
    margin-top: 10px;
  }
  .payInfo-address span{
    margin-right: 5px;
    font-size: 12px;
  }
  .addrTitle{
    font-weight: 700;
  }
  .submitBtnBox{
    text-align: right;
    margin-top: -1px;
  }
  .btn-wrap{
    display: inline-block;
    width: 182px;
    height: 40px;
    position: relative;
    vertical-align: middle;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  .btn-wrap.on{
    background: red;
    color: #fff;
  }
  .btn-wrap.off{
    background: #ccc;
  }
  .isNotAddress{
    font-size: 12px;
    margin-top: 10px;
    font-weight: 700;
  }
</style>
