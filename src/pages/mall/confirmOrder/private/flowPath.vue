<template>
  <div class="clearfix">
    <router-link to="/" class="logoImg">
      <img src="../../../../assets/images/corelogo.png" alt="">
    </router-link>
    <div class="flowBox clearfix">
      <span class="on">确认订单信息</span>
      <span class="off">支付订单</span>
      <span class="off">确认收货</span>
      <span class="off">订单评价</span>
    </div>
  </div>
</template>

<style scoped>
  .logoImg{
    float: left;
    display: block;
    width: 120px;
    height: 70px;
    margin: 20px 0;
  }
  .flowBox{
    float: right;
    margin-top: 40px;
  }
  .flowBox span{
    display: block;
    float: left;
    width: 125px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-weight: bold;
  }
  .flowBox span.on{
    background: url(../../../../assets/icon/gwcjd1.png) no-repeat center;
    background-size: cover;
    color: #fff;
  }
  .flowBox span.off{
    background: url(../../../../assets/icon/gwcjd2.png) no-repeat center;
    background-size: cover;
  }
</style>
