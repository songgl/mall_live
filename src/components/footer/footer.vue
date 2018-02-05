<template>
  <div class="footerBox">
    <div class="contentBox">
      <div class="inner clearfix">
        <div class="itemBox">
          <dl>
            <dt class="clearfix">
              <span class="about_icon iconWH"></span>
              关于我们
            </dt>
            <dd><router-link to="">商家入驻</router-link></dd>
            <dd><router-link to="">关于百台云</router-link></dd>
            <dd><router-link to="">招聘信息</router-link></dd>
          </dl>
        </div>
        <div class="itemBox">
          <dl class="m0a">
            <dt class="clearfix">
              <span class="logistics_icon iconWH"></span>
              配送方式
            </dt>
            <dd><router-link to="">配送范围及时间</router-link></dd>
            <dd><router-link to="">商品验货与签收</router-link></dd>
          </dl>
        </div>
        <div class="itemBox">
          <dl class="m0a">
            <dt class="clearfix">
              <span class="pay_icon iconWH"></span>
              支付方式
            </dt>
            <dd><router-link to="">网上支付</router-link></dd>
            <dd><router-link to="">支付常见问题</router-link></dd>
          </dl>
        </div>
        <div class="itemBox">
          <dl class="m0a">
            <dt class="clearfix">
              <span class="service_icon iconWH"></span>
              售后服务
            </dt>
            <dd><router-link to="">法律声明</router-link></dd>
            <dd><router-link to="">用户协议</router-link></dd>
          </dl>
        </div>
        <div class="itemBox clearfix">
          <dl class="fr">
            <dt class="clearfix">
              <span class="help_icon iconWH"></span>
              帮助信息
            </dt>
            <dd><router-link to="">常见问题</router-link></dd>
            <dd><router-link to="">联系客服</router-link></dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="copyBox">
      <div class="inner">
        <span>云南百台联盟云媒体产业有限公司 版权所有©</span>
        <span>滇ICP备17010816号</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .m0a{
    margin: 0 auto;
  }
  .footerBox{
    width: 100%;
  }
  .inner{
    width: 1200px;
    margin: 0 auto;
  }
  .contentBox{
    width: 100%;
    background-color: #fff;
  }
  .contentBox .inner{
    padding: 20px 0;
  }
  .itemBox{
    width: 20%;
    float: left;
    min-height: 200px;
  }
  .itemBox dl{
    width: 70%;
  }
  .itemBox dt{
    font-size: 16px;
    height: 30px;
    border-bottom: 1px solid #333;
    margin-bottom: 10px;
  }
  .itemBox dd{
    padding: 5px 0 0 25px;
    font-size: 12px;
  }
  .itemBox a:hover{
    color: red;
  }
  .iconWH{
    display: inline-block;
    float: left;
    width: 24px;
    height: 24px;
  }
  .about_icon{
    background: url(../../assets/icon/guanyu@2x.png) no-repeat center;
    background-size: cover;
  }
  .logistics_icon {
    background: url(../../assets/icon/peisong@2x.png) no-repeat center;
    background-size: cover;
  }
  .pay_icon {
    background: url(../../assets/icon/zhifu@2x.png) no-repeat center;
    background-size: cover;
  }
  .service_icon {
    background: url(../../assets/icon/shouhou@2x.png) no-repeat center;
    background-size: cover;
  }
  .help_icon {
    background: url(../../assets/icon/bangzhu@2x.png) no-repeat center;
    background-size: cover;
  }
  .copyBox{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .copyBox .inner{
    text-align: center;
    color: #333;
    font-size: 12px;
  }
</style>
