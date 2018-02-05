<template>
 <div class="box">
      <div class="userInfoBox  clearfix">
      <div class="userImg fl">
        <img src="../../../assets/images/tu2@3x.png" alt="">
      </div>
      <div class="btn_upimg fl box_center ">上传头像 </div>

      <div class="fl"></div>
    </div>
    <div class="w100 mt-40 ">
      <div class="box_between ">
        <div class="box_end w-80 h-40">昵称：</div>
        <div class="grid_cell h-36 box_start"><input class="w-300 bor h100 bg_f1f1f1" type="text" ></div>
      </div>
       <div class="box_between mt-20">
        <div class="box_end w-80 h-40">手机号：</div>
        <div class="grid_cell h-36 box_start"><input class="w-300 bor h100 bg_f1f1f1" type="text" ></div>
      </div>
      <div class="mt-20 box_between">
        <div class="box_end w-80 h-40 ">性别：</div>
        <div class="grid_cell h-36 box_start">
            <label class="mr-40"><input class="mr-5" id="male" name="sex" type="radio" value="m" >男</label>
            <label><input class="mr-5" name="sex" id="female" type="radio" value="w" >女</label>
          </div>
      </div>
      <div class="mt-20 box_between">
        <div class="box_end w-80 h-40">出生日期：</div>
        <div class="grid_cell h-36 box_start birthdayselect">
          <select class="sel_year" rel='2000'>
            <option value="0">--</option>
          </select><span class="mr-10">年</span>
          <select class="sel_month" rel='1'>
            <option value="0">--</option>
          </select><span class="mr-10">月</span>
          <select class="sel_day" rel='1'>
            <option value="0">--</option>
          </select><span class="mr-10">日</span>
        </div>
      </div>
      <div class="mt-60 box_between">
        <div class="w-80"></div>
        <div class="grid_cell h-30 box_start">
          <div class="box_center btn_upinfo">保存</div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import '@/assets/css/cuimeng_style.css'
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
</style>
