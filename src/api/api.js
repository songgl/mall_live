import { post, get } from './config'

export default {
  // 获取平台信息
  getBusinessInfo () {
    return get('api/Home/company_info')
  },
  // 获取验证码
  getCode (data){
    return post('api/login/sendSMS',data)
  },
  // 登录
  loginFun (data) {
    return post('api/login/message_login', data)
  },
  // 获取用户信息
  getUserInfo (data) {
    return post('api/user/user_info', data)
  },
}



