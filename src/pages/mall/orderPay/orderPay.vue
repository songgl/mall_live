<template>
  <div class="pageBox">
    <div class="thisHeader">
      <div class="headerBox clearfix">
        <router-link to="/" class="logoImg">
          <img src="../../../assets/images/corelogo.png" alt="">
        </router-link>
        <div class="Title">订单支付</div>
        <div class="header-right">
          <router-link :to="{path: '/portal'}">个人中心</router-link> |
          <router-link :to="{path: '/portal/orderList'}">我的订单</router-link>
        </div>
      </div>
    </div>
    <div class="page_main">
      <div class="order_item clearfix">
        <div class="succsee_icon"></div>
        <div class="order_info clearfix">
          <div class="info_left">
            <h2 class="title">订单提交成功！去付款咯～</h2>
            <p class="order_time">
              请在<count-down :endTime="endTime" :callback="callback" v-if="endTime"></count-down>内完成支付, 超时后将取消订单
            </p>
            <p class="order_address">
              收货信息：
              <span v-text="orderDetails.address_name"></span>
              <span v-text="orderDetails.address_mobile"></span>
              <span v-text="orderDetails.address_province"></span>
              <span v-text="orderDetails.address_city"></span>
              <span v-text="orderDetails.address_country"></span>
              <span v-text="orderDetails.address_detailed"></span>
            </p>
          </div>
          <div class="info_right">
            <p class="total_price">
              应付金额：¥<span class="money" v-text="orderDetails.amount"></span>  
            </p>
          </div>
        </div>
      </div>
      <div class="order_item">
        <div class="mode_title">选择以下支付方式付款</div>
        <div class="payment-header">支付平台</div>
        <div class="clearfix">
          <div class="pay_item" @click="orderPay('wx_pub_qr')">
            <div class="wx_pay"></div>
          </div>
          <div class="pay_item" @click="orderPay('ali_pub_qr')">
            <div class="ali_pay"></div>
          </div>
        </div>
      </div>
    </div>
    <pay-code :value="orderPayInfo.credential.wx_pub_qr" v-if="payCodeState"></pay-code>
    <my-footer></my-footer>
  </div>
</template>

<script>
import api from '@/api/order'
import myFooter from '@/components/footer/footer'
import payCode from './private/payCode'
import CountDown from '@/components/countDown/countDown'

export default {
  data () {
    return {
      orderDetails: {},
      orderPayInfo: {},
      payCodeState: false,
      endTime: null
    }
  },
  methods: {
    // 下单支付获取订单信息
    _getOrderPayDetails () {
      api.getOrderPayDetails(this.$route.query.payType,{
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        order_no: this.$route.query.order_no
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.orderDetails = res.data
          this.endTime = parseInt(res.data.cancel_end_time) * 1000
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 支付
    orderPay (type) {
      if(type == 'ali_pub_qr'){
        this.promptFun({
          content: '该功能暂未开通',
          type: 'notice'
        })
        return false;
      }
      api.orderPay(this.$route.query.payType, {
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        order_no: this.$route.query.order_no,
        type
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.orderPayInfo = res.data,
          this.payCodeState = true;
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 倒计时结束回调
    callback () {
      console.log('倒计时结束')
      this.$router.replace({
        path:'/portal/orderList'
      })
    }
  },
  created () {
    this._getOrderPayDetails()
  },
  components: {
    myFooter,
    payCode,
    CountDown
  }
}
</script>

<style scoped>
  .thisHeader{
    width: 100%;
    font-size: 12px;
    border-bottom: 2px solid #80b2ff;
    background: #fff;
    color: #b0b0b0;
  }
  .headerBox{
    width: 1200px;
    margin: 0 auto;
    padding: 15px 0;
  }
  .logoImg{
    width: 120px;
    height: 70px;
    float: left;
  }
  .Title{
    display: inline-block;
    font-size: 28px;
    line-height: 48px;
    font-weight: normal;
    color: #424242;
    margin: 10px 40px 0;
  }
  .header-right{
    float: right;
    height: 40px;
    line-height: 40px;
    margin: 15px 0;
  }
  .header-right a{
    color: #757575;
    margin: 0 10px;
  }
  .header-right a:hover, .order_time span{
    color: red;
  }
  .page_main{
    width: 1200px;
    margin: 30px auto;
  }
  .order_item{
    margin-bottom: 30px;
    background: #fff;
    padding: 30px;
  }
  .succsee_icon{
    background: url(../../../assets/icon/success.png) no-repeat center;
    background-size: cover;
    width: 80px;
    height: 80px;
    float: left;
  }
  .order_info{
    padding-left: 120px;
    width: 100%;
  }
  .info_left{
    float: left;
  }
  .info_right{
    float: right;
    text-align: right;
  }
  .title{
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: normal;
    line-height: 36px;
  }
  .info_left p{
    color: #616161;
    margin-bottom: 5px;
    line-height: 2;
  }
  .total_price{
    margin-bottom: 10px;
    color: #757575;
  }
  .total_price .money{
    color: red;
    font-size: 24px;
  }
  .mode_title{
    height: 50px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 18px;
  }
  .payment-header{
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 16px;
    color: #616161;
  }
  .pay_item{
    border: 1px solid #e5e5e5;
    float: left;
    margin-right: 20px;
    cursor: pointer;
    padding: 10px;
  }
  .wx_pay{
    background: url(../../../assets/icon/wxpay.png) no-repeat center;
    background-size: cover;
    width: 160px;
    height: 36px;
  }
  .ali_pay{
    background: url(../../../assets/icon/alpay.png) no-repeat center;
    background-size: cover;
    width: 160px;
    height: 36px;
  }
  .pay_item:hover{
    border: 1px solid red;
  }
</style>
