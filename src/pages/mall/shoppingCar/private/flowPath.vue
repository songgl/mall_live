<template>
  <div class="clearfix">
    <router-link to="/" class="logoImg">
      <img src="../../../../assets/images/corelogo.png" alt="">
    </router-link>
    <div class="title">购物车</div>
    <div class="flowBox clearfix">
      <span class="on">购物车</span>
      <span class="off">确认订单</span>
      <span class="off">完成付款</span>
    </div>
  </div>
  
</template>

<style scoped>
  .thisHeader{
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
  }
  .title{
    float: left;
    padding: 35px 20px;
    font-size: 24px;
  }
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
