<template>
  <div class="box">
    <div class="userInfoBox">
      <div class="clearfix">
        <div class="userImg">
          <img :src="(uid && token) ? userInfo.header_img : default_header" alt=""/>
        </div>
        <div class="userName">
          <p>Hi! <span v-if="uid && token" v-text="userInfo.username"></span></p>
          <p>欢迎回来</p>
        </div>
      </div>
      <div class="userBtn clearfix">
        <router-link :to="{path: '/portal'}" class="btnItem" v-if="uid && token">个人中心</router-link>
        <router-link :to="{path: '/portal/orderList'}" class="btnItem" v-if="uid && token">我的订单</router-link>
        <div class="btnItem" v-if="!uid || !token" @click="goLogin">登录</div>
      </div>
    </div>
    <div class="signatureBox">
      <div class="wbyc4">
        签名：
        <span v-if="!uid || !token">登录后显示您的签名！</span>
        <span v-if="uid && token" v-text="userInfo.signature"></span>
      </div>
    </div>
    <div class="clearfix iconBox">
      <div class="iconItem">
        <a href="" class="settled_icon"></a>
        <div class="iconTxt settledTxt">商家入驻</div>
      </div>
      <div class="iconItem">
        <a href="" class="recharge_icon"></a>
        <div class="iconTxt rechargeTxt">充值</div>

      </div>
    </div>
  </div>
</template>

<script>
import headerImg from '@/assets/icon/header.png'

export default {
  data () {
    return {
      uid: this.getCookie('uid') || '',
      token: this.getCookie('token') || '',
      userInfo: this.getCookie('userInfo') || {},
      default_header: headerImg
    }
  }
}
</script>

<style scoped>
  .box{
    height: 395px;
    width: 295px;
    float: right;
    margin-top: 5px;
    background-color: #fff;
  }
  .userInfoBox{
    border-bottom: 1px solid #e5e5e5;
    padding: 20px;
    height: 150px;
  }
  .userImg{
    width: 60px;
    height: 60px;
    float: left;
  }
  .userImg img{
    border-radius: 50%;
  }
  .userName{
    width: 70%;
    margin-left: 10px;
    margin-top: 10px;
    float: left;
  }
  .userName span{
    color: red;
  }
  .userBtn{
    margin-top: 20px;
  }
  .btnItem{
    width: 88px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #3FB8FF;
    font-size: 14px;
    color: #3FB8FF;
    float: left;
    text-align: center;
    margin: 0 18px;
    cursor:pointer;
  }
  .signatureBox{
    height: 120px;
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  .iconBox{
    width: 100%;
    height: 125px;
  }
  .iconItem{
    width: 50%;
    height: 100%;
    float: left;
    padding: 10px;
  }
  .iconTxt{
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
  .settled_icon{
    background: url(../../../../assets/icon/ruzhu.png) no-repeat center;
    background-size: cover;
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }
  .settledTxt{
    color: #3FB8FF;
  }
  .recharge_icon{
    background: url(../../../../assets/icon/chongzhi.png) no-repeat center;
    background-size: cover;
    width: 51px;
    height: 56px;
    display: block;
    margin: 0 auto;
  }
  .rechargeTxt{
    color: #FF833F;
  }
</style>
