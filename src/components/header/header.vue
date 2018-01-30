<template>
  <div class="headerBox">
    <div class="header-inner clearfix">
      <div class="left-box">
        <div v-if="!uid && !token">您好，请<span class="loginBtn" @click="goLogin">【登录】</span></div>
        <div v-else="!uid || !token">欢迎您，<em v-text="userInfo.username" style="color:red"></em><span class="loginBtn" @click="loginOut">【退出】</span></div>
      </div>
      <div class="right-box">
        <router-link :to="{path: '/shoppingCar'}">购物车</router-link>|
        <router-link :to="{path: '/portal/orderList'}">我的订单</router-link>|
        <router-link :to="{path: '/portal'}">个人中心</router-link>|
        <router-link :to="{path: '/portal/goodsCollection'}">商品收藏</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uid: this.getCookie('uid') || '',
      token: this.getCookie('token') || '',
      userInfo: this.getCookie('userInfo') || {}
    }
  },
  methods: {
    loginOut () {
      this.uid = ''
      this.token = ''
      this.userInfo = ''
      this.removeCookie('uid')
      this.removeCookie('token')
      this.removeCookie('userInfo')
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
  .headerBox{
    width: 100%;
    background-color: #e3e4e5;
    border-bottom: 1px solid #ddd;
  }
  .header-inner{
    width: 1200px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
  }
  .left-box{
    float: left;
    position: relative;
  }
  .loginBtn{
    cursor: pointer;
    color: #3F8FDF;
  }
  .right-box{
    font-size: 12px;
    float: right;
  }
  .right-box a{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 15px 0 15px;
  }
  .right-box a:hover{
    color: #3F8FDF
  }
</style>
