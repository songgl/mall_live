<template>
  <div class="box">
    <div class="userInfoBox clearfix">
      <div class="userImg fl">
        <img :src="userInfo.header_img" alt="">
      </div>
      <div class="userTxt fl">
        <p>用户名：<span v-text="userInfo.username"></span></p>
        <p class="wbyc2">个性签名：<span v-text="userInfo.signature"></span></p>
      </div>
      <div class="fl"></div>
    </div>
    <div></div>
  </div>
</template>

<script>
import api from '@/api/api'
import storage from '@/common/storage'
export default {
  data () {
    return {
      userInfo: {}
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
          this.setCookie('userInfo', res.data)
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data
          })
        }
      })
    }
  },
  created () {
    this._getUserInfo()
  },
  components: {

  }
}
</script>

<style scoped>
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
    padding-top: 30px;
    margin-left: 40px;
    width: 300px;
  }
  .userTxt p{
    margin-bottom: 10px;
  }
</style>
