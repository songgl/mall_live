<template>
  <div class="pageBox">
    <div class="logoBox">
      <div class="container">
        <router-link :to="{path: '/'}" class="logoImg">
          <img src="../../assets/images/corelogo.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="contentBox clearfix">
      <div class="loginFrom">
        <div class="titleBox">账号登录</div>
        <div class="inputBox">
          <input v-model="mobile" class="phoneInput" type="text" v-on:input="inputChange" placeholder="请输入您的手机号">
        </div>
        <div class="inputBox clearfix">
          <input v-model="code" class="codeInput" type="text" placeholder="请输入验证码">
          <button v-if="codeObj.btnType" class="codeBtn" @click="_getCode" v-text="codeObj.txt"></button>
          <button v-else="codeObj.btnType" class="codeBtn" v-text="codeObj.count"></button>
        </div>
        <div class="errorBox" v-text="errorTxt"></div>
        <div class="loginBtn" @click="_login">登录</div>
      </div>
    </div>
    <div class="copyBox">
      <div class="container">
        <span>云南百台联盟云媒体产业有限公司 版权所有©</span>
        <span>滇ICP备17010816号</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '@/api/api'
import storage from '@/common/storage'

export default {
  data () {
    return {
      mobile: '',
      code: '',
      userInfo: {},
      errorTxt: '',
      codeObj:{
        txt: '获取验证码',
        count: 60, //倒计时时间
        btnType: true
      },
      timer: null
    }
  },
  methods: {
    // input change事件
    inputChange () {
      this.errorTxt = ''
    },
    // 获取验证码
    _getCode () {
      if(!this.mobile){
        this.errorTxt = '手机号不能为空'
        return false
      }else if(!this.phoneReg.test(this.mobile)){
        this.errorTxt = '手机号格式错误'
        return false
      }
      if (!this.timer) {
        this.codeObj.btnType = false
        this.codeObj.txt = '重新获取'
        this.timer = setInterval(() => {
          if (this.codeObj.count > 0 && this.codeObj.count <= 60) {
            this.codeObj.count--
          } else {
            this.codeObj.btnType = true
            this.codeObj.count = 60
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
      api.getCode({
        mobile: this.mobile
      }).then((res) => {
        console.log(res)
        if(res.status === 'ok'){
          this.errorTxt = ''
        }else if(res.status === 'error'){
          this.errorTxt = res.data
        }
      })
    },
    // 登录
    _login () {
      if(!this.mobile){
        this.errorTxt = '手机号不能为空'
        return false
      }else if(!this.phoneReg.test(this.mobile)){
        this.errorTxt = '手机号格式错误'
        return false
      }else if(!this.code){
        this.errorTxt = '验证码不能为空'
        return false
      }
      api.loginFun({
        mobile: this.mobile,
        yzm: this.code
      }).then((res) => {
        if(res.status === 'ok'){
          this.errorTxt = ''
          this.setLoginState(true)
          this.setCookie('uid', res.data.member_id)
          this.setCookie('token', res.data.app_token)
          this.setCookie('userInfo', res.data)
          setTimeout(() => {
            this.$router.replace({
              path: storage.s_getItem('beforeLoginUrl')
            })
          }, 1000)
        }else if(res.status === 'error'){
          this.errorTxt = res.data
        }
      })
    },
    ...mapMutations({
      setLoginState: 'SET_LOGINSTATE'
    })
  },
  created () {

  },
  components: {

  }
}
</script>

<style scoped>
  .logoBox{
    background-color: #fff;
    width: 100%;
    padding: 15px 0;
  }
  .logoImg{
    width: 120px;
    height: 70px;
    margin-left: 50px;
    display: block;
  }
  .contentBox{
    background: url(../../assets/images/pcbg.jpeg) no-repeat center;
    background-size: cover;
    width: 100%;
    height: 588px;
  }
  .loginFrom{
    float: right;
    margin-top: 20px;
    margin-right: 100px;
    width: 346px;
    height: 400px;
    background-color: #fff;
  }
  .titleBox{
    padding: 20px 0;
    text-align: center;
    font-size: 24px;
    color: #333;
  }
  .inputBox{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }
  .phoneInput{
    width: 100%;
  }
  .inputBox input {
    font-size: 14px;
    padding: 0 5px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
  }
  .codeInput{
    width: 50%;
    float: left;
  }
  .codeBtn{
    width: 40%;
    float: right;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    font-size: 14px;
    background-color: #3f8fdf;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  .errorBox{
    width: 80%;
    margin: 10px auto;
    height: 20px;
    line-height: 20px;
    color: red;
  }
  .loginBtn{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    height: 40px;
    line-height: 40px;
    background-color: #3f8fdf;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
  }
  .copyBox .container{
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #333;
    font-size: 12px;
  }
</style>
