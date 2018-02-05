<template>
 <div class="box">
      <div class="userInfoBox  clearfix">
      <div class="userImg fl">
        <img :src="userInfo.header_img" alt="头像" />
      </div>
      <div class="btn_upimg fl box_center ">上传头像 
          <form>
            <input id="file" class="userFile" type="file" @change="_upImg($event)" name="img" >
          </form>
       </div>

      <div class="fl"></div>
    </div>
    <div class="w100 mt-40 ">
      <div class="box_between ">
        <div class="box_end w-80 h-40">昵称：</div>
        <div class="grid_cell h-36 box_start"><input class="w-300 text-indent_2 bor h100 bg_f1f1f1" v-model="userInfo.username" type="text" placeholder="用户名"></div>
      </div>
       <div class="box_between mt-20">
        <div class="box_end w-80 h-40">手机号：</div>
        <div class="grid_cell h-36 box_start text-indent_2" v-text="userInfo.phone ? userInfo.phone : '未绑定手机'"></div>
      </div>
      <div class="mt-20 box_between">
        <div class="box_end w-80 h-40 ">性别：</div>
        <div class="grid_cell h-36 box_start">
             <el-radio v-model="radio" label="1">男</el-radio>
             <el-radio v-model="radio" label="2">女</el-radio>
          </div>
      </div>
    <!--   <div class="mt-20 box_between">
        <div class="box_end w-80 h-40">出生日期：</div>
        <div class="grid_cell h-36 box_start birthdayselect">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
        </div>
      </div> -->
      <div class="mt-60 box_between">
        <div class="w-80"></div>
        <div class="grid_cell h-30 box_start">
          <div class="box_center btn_upinfo" v-on:click="_editUserInfo">保存</div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import '@/assets/css/cuimeng_style.css'
import api from '@/api/api'
import me from '@/api/me'
import storage from '@/common/storage'
import { Radio , DatePicker} from 'element-ui'

export default {
  data () {
    return {
       userInfo: {},
       radio: '1',
       value1: ''
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
          this.userInfo = res.data;
          this.radio=res.data.sex
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data
          })
        }
      })
    },
    // 上传用户单张图片
    _upImg (e) {
      api.upImg(e)
      .then((res)=>{
        if(res.status === 'ok'){
          this.userInfo.header_img = res.data[0]
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type:'error'
          })
        }
      })
    },
    /*
    * 修改个人信息
    */
    _editUserInfo () {
      me.editUserInfo({
        username: this.userInfo.username,
        header_img: this.userInfo.header_img,
        sex: this.radio,
         uid: this.getCookie('uid'),
        token: this.getCookie('token')
        // signature: this.userInfo.signature
      })
      .then((res) => {
        if(res.status === 'ok'){
          this.promptFun({
            content: '修改成功',
            type: 'success'
          })
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    }


  },
  created () {
     this._getUserInfo();
  },
  components: {
    ElRadio:Radio,
    ElDatePicker:DatePicker
  }
}
</script>

<style scoped>
   .box{
    background-color: #fff;
    padding: 30px;
    padding-bottom: 50px;
  }
 .userInfoBox{
    padding: 20px 0;
  }
  .userImg{
    width: 120px;
    height: 120px;

  }
  .userImg img{
    border-radius: 50%;
    border: 1px solid #e3e4e5;
  }
   .userTxt{
    padding-top: 10px;
    margin-left: 40px;
    width: 300px;
  }
  .btn_upimg{
    font-size: 16px;
    border:1px solid #e3e4e5;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    margin-top: 40px;
    margin-left: 30px;
    background-color: #f1f1f1;
    position: relative;
  }
.btn_upinfo{
    font-size: 16px;
    width: 150px;
    height: 30px;
    color: #fff;
    background-color: #3f8fdf;
}  
.birthdayselect select {
    margin-right: 6px;
    height: 26px;
    padding: 0px 6px;
    border: 1px solid #ebebeb;
    color: #666;
}
.userFile{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
</style>
