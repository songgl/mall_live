<template>
  <div class="footerBox">
    <div class="contentBox">
      <div class="inner clearfix">
        <div class="itemBox">
          <dl >
            <dt class="clearfix">
              <span class="about_icon iconWH"></span>
              关于我们
            </dt>
            <dd>商家入驻</dd>
            <dd>关于百台云</dd>
            <dd>招聘信息</dd>
          </dl>
        </div>
        <div class="itemBox">
          <dl class="m0a">
            <dt class="clearfix">
              <span class="about_icon iconWH"></span>
              关于我们
            </dt>
            <dd>商家入驻</dd>
            <dd>关于百台云</dd>
            <dd>招聘信息</dd>
          </dl>
        </div>
        <div class="itemBox">
          <dl class="m0a">
            <dt class="clearfix">
              <span class="about_icon iconWH"></span>
              关于我们
            </dt>
            <dd>商家入驻</dd>
            <dd>关于百台云</dd>
            <dd>招聘信息</dd>
          </dl>
        </div>
        <div class="itemBox">
          <dl class="m0a">
            <dt class="clearfix">
              <span class="about_icon iconWH"></span>
              关于我们
            </dt>
            <dd>商家入驻</dd>
            <dd>关于百台云</dd>
            <dd>招聘信息</dd>
          </dl>
        </div>
        <div class="itemBox clearfix">
          <dl class="fr">
            <dt class="clearfix">
              <span class="about_icon iconWH"></span>
              关于我们
            </dt>
            <dd>商家入驻</dd>
            <dd>关于百台云</dd>
            <dd>招聘信息</dd>
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

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  components: {

  }
}
</script>

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
