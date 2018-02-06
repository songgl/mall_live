<template>
  <div class="wallbox">
    <div class="box">
      <div class="userInfoBox  clearfix">
      <div class="userImg fl">
        <img :src="userInfo.header_img" alt="">
      </div>
      <div class="userTxt fl">
        <p><span class="f26" v-text="userInfo.username"></span></p>
        <p class=""><span class="f12 f_co_999" v-text="userphonestar"></span></p>
        <p class="mt-15">账户余额：<span class="f12 f_co_999" v-text="userInfo.amount"></span>
          <!-- <span class="f_co_fff bg_red f10 ml-10 pl-5 pr-5">提现</span> -->
        </p>
      </div>
      <!-- <div class=" fl ">
        <p class="mt-15">积分：<span class="f12 f_co_fd655a" >1000</span></p>
        <p class="mt-15">信用额度：<span class="f12 f_co_fd655a" >1000</span></p>
        <p class="mt-15">优惠券：<span class="f12 f_co_fd655a" >2</span></p>
      </div> -->
      <div class="fl"></div>
    </div>
    </div>
    
    <div class="grzl-ddnav box clearfix">
          <div>
            <p><img src="../../../assets/icon/dfk.png"></p>
            <ul>
              <li>待付款：<span class="">0</span></li>
              <li><span @click="goOrderList('wait_pay')">查看待支付订单&gt;</span></li>
            </ul>
          </div>
          <div>
            <p><img src="../../../assets/icon/tkz.png"></p>
            <ul>
              <li>待发货：<span class="">0</span></li>
              <li><span @click="goOrderList('wait_send')">查看待发货订单&gt;</span></li>
            </ul>
          </div>
          <div>
            <p><img src="../../../assets/icon/dsh.png"></p>
            <ul>
              <li>待收货：<span class="">0</span></li>
              <li><span @click="goOrderList('wait_receive')">查看待收货订单&gt;</span></li>
            </ul>
          </div>
          <div>
            <p><img src="../../../assets/icon/dpj.png"></p>
            <ul>
              <li>待评论：<span class="">0</span></li>
              <li><span @click="goOrderList('wait_assessment')">查看待评论订单&gt;</span></li>
            </ul>
          </div>
    </div>
  </div>
  
</template>

<script>
import { mapMutations } from 'vuex'
import '@/assets/css/cuimeng_style.css'
import api from '@/api/api'
import storage from '@/common/storage'
import GoodsItem from '@/components/goodsItem/goodsItem'
export default {
  data () {
    return {
      userInfo: {},
      userphonestar:''
    }
  },
  methods: {
    // 获取用户信息
    _getUserInfo () {
      api.getUserInfo({
        uid: this.getCookie('uid'),
        token: this.getCookie('token')
      }).then((res) => {
        console.log(res)
        if(res.status === 'ok'){
          this.userInfo = res.data
          this._rechangeUserphone(res.data.phone)
          this.setCookie('userInfo', res.data)
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data
          })
        }
      })
    },
    // 用户手机号加*
    _rechangeUserphone (phone) {
      this.userphonestar = phone.substring(0,3)+ "****" + phone.substring(7,11); 
    },

    // 跳转订单列表
    goOrderList (type) {
      this.$router.push({
        path: 'orderList'
      })
      this.setOrderType(type)
    },

    ...mapMutations({
      setOrderType: 'SET_ORDERTYPE'
    })

  },
  created () {
    this._getUserInfo();
   
  },
  components: {

  }
}
</script>

<style scoped>
 
  .wallbox{

  }
  .box{
    background-color: #fff;
    padding: 30px;
  }
  .userInfoBox{
    padding: 20px 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .userImg{
    width: 120px;
    height: 120px;

  }
  .userImg img{
    border-radius: 50%;
    border: 1px solid #f1f1f1;
  }
  .userTxt{
    padding-top: 10px;
    margin-left: 40px;
    width: 300px;
  }
  
  
  .grzl-ddnav {
  
  }
  .grzl-ddnav>div {
    width: 50%;
    float: left;
    margin-bottom: 40px;
}
.grzl-ddnav>div p {
    width: 100px;
    height: 100px;
    overflow: hidden;
    float: left;
}
.grzl-ddnav>div p img {
    width: 100%;
}
.grzl-ddnav>div ul {
    padding: 29px 0px;
    padding-left: 130px;
}
.grzl-ddnav>div ul li:first-child {
    font-size: 18px;
}
.grzl-ddnav>div ul li span {
    color: #fd655a;
    font-size: 18px;
}
.grzl-ddnav>div ul li a {
    color: #999;
}
.grzl-ddnav>div:first-child ul li a  {
    color: #ff6350;
}
.orderlist_item:last-child {
  border-bottom: none;
}
.goodsItemBox{
    width: 25%;
    padding-left: 20px;
    height: 350px;
    float: left;
    margin-bottom: 20px;
  }
/*商品样式*/
.itemContent{
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    padding: 10px;
  }
  .itemContent:hover{
    box-shadow: 1px 1px 7px #999;
  }
  .goodsImg{
    height: 200px;
  }
  .priceBox{
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
  }
  .now_price{
    color: red;
    margin-right: 10px;
    font-size: 16px;
  }
  .origin_price{
    color: #999;
    text-decoration:line-through;
    font-size: 14px;
  }
  .goodsName{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    height: 38px;
    min-height: 38px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .salesEvalu{
    height: 20px;
    line-height: 20px;
  }
  .salesEvalu span{
    color: #999;
    font-size: 14px;
    margin-right: 10px;
  }
  .salesEvalu em{
    color: #145596;
  }
</style>
