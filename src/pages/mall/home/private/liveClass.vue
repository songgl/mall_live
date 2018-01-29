<template>
  <div class="box clearfix">
    <a href="" class="itemBox clearfix" style="background-color:#C3EEDC">
      <div class="iconBox tv_icon"></div>
      <div class="iconTxt">
        <p class="itemTitle wbyc">电视台</p>
        <p class="itemDec wbyc">电视台主持</p>
      </div>
    </a>
    <a href="" class="itemBox clearfix" style="background-color:#C3DBED">
      <div class="iconBox celebrity_icon"></div>
      <div class="iconTxt">
        <p class="itemTitle wbyc">名人</p>
        <p class="itemDec wbyc">名人直播</p>
      </div>
    </a>
    <a href="" class="itemBox clearfix" style="background-color:#C4C8E8">
      <div class="iconBox nearby_icon"></div>
      <div class="iconTxt">
        <p class="itemTitle wbyc">附近的人</p>
        <p class="itemDec wbyc">寻找附近的直播</p>
      </div>
    </a>
    <a href="" class="itemBox clearfix" style="background-color:#C5E5E9">
      <div class="iconBox newPeople_icon"></div>
      <div class="iconTxt">
        <p class="itemTitle wbyc">新人秀</p>
        <p class="itemDec wbyc">来看看有你认识的人不</p>
      </div>
    </a>
    <a href="" class="itemBox2 clearfix" style="background-color:#E8C4C4">
      <div class="allLiveTxt">全部直播</div>
      <div class="right_icon"></div>
    </a>
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
  .box{
    width: 100%;
    margin: 20px 0;
  }
  .itemBox{
    width: 240px;
    height: 100px;
    margin-right: 20px;
    float: left;
    display: block;
  }
  .itemBox2{
    float: right;
    height: 100px;
    width: 160px;
    display: block;
  }
  .iconBox{
    float: left;
    width: 50px;
    height: 50px;
    margin: 25px;
  }
  .iconTxt{
    width: 50%;
    height: 50px;
    margin: 25px 0;
    float: left;
  }
  .itemTitle{
    font-size: 16px;
  }
  .itemDec{
    font-size: 12px;
    padding-top: 10px;
  }
  .tv_icon{
    background: url(../../../../assets/icon/dianshitai@2x.png) no-repeat center;
    background-size: cover;
  }
  .celebrity_icon{
    background: url(../../../../assets/icon/mingren@2x.png) no-repeat center;
    background-size: cover;
  }
  .nearby_icon{
    background: url(../../../../assets/icon/fujing@2x.png) no-repeat center;
    background-size: cover;
  }
  .newPeople_icon{
    background: url(../../../../assets/icon/xinren@2x.png) no-repeat center;
    background-size: cover;
  }
  .right_icon{
    background: url(../../../../assets/icon/hei_fangxiang@2x.png) no-repeat center;
    background-size: cover;
    width: 14px;
    height: 20px;
    float: left;
    margin: 40px 0;
  }
  .allLiveTxt{
    float: left;
    height: 20px;
    margin: 40px 10px 40px 40px;
  }
</style>
