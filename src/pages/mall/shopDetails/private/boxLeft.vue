<template>
  <div class="box-left">
    <!-- 直播 -->
    <div class="liveBox">
      <div class="titleBox">往期回放</div>
      <div class="content">
        <img src="../../../../assets/images/zb_tu2@2x.png" alt="">
      </div>
      <div class="guideName">视频标题视频标题</div>
    </div>
    <!-- 导购视频 -->
    <div class="guideBox">
      <div class="titleBox">导购视频</div>
      <div class="content">
        <img src="../../../../assets/images/zb_tu2@2x.png" alt="">
      </div>
      <div class="guideName">视频标题视频标题</div>
    </div>
    
  </div>
</template>

<script>
import api from '@/api/goods'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  methods: {

    // 获取导购视频
    // _getShopGuideVideo () {
    //   api.getShopGuideVideo({
    //     uid: this.getCookie('uid'),
    //     token: this.getCookie('token'),
    //     mid: this.$route.query.merchants_id
    //   }).then(res => {
        
    //   })
    // }
  },
  created () {

  },
  components: {
    
  }
}
</script>

<style scoped>
  .box-left{
    float: left;
    width: 240px;
  }
  .titleBox{
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #e5e5e5;
    color: #fff;
  }
  .liveBox .titleBox {
    background-color: #FD655A;
  }
  .liveBox .content{
    width: 240px;
    height: 240px;
    cursor: pointer;
  }
  .guideBox {
    margin-top: 20px;
  }
  .guideBox .titleBox {
    background-color: #3F8FDF;
  }
  .guideBox .content{
    width: 240px;
    height: 180px;
    cursor: pointer;
  }
  .guideBox .content img{
    width: 100%;
    height: 100%;
  }
  .guideName{
    width: 240px;
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
    background-color: #fff;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
