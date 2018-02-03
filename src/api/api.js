import axios from 'axios'
import { post, get } from './config'

export default {
  /*
  * 上传图片
  * 单张
  */
  upImg (e) {
    var self = this
    let file = e.target.files[0]
    let param = new FormData() // 创建form对象
    param.append('file', file, file.name) // 通过append向form对象添加数据
    param.append('chunk', '0') // 添加form表单中其他数据
    console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
    return axios.post(
      'api/login/upload',
      param, 
      {headers: {'Content-Type': 'multipart/form-data'}}
    ).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  
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
  }
}



