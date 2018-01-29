<template>
  <div class="box">
    <div class="mk" @click="close"></div>
    <div class="addressBox">
      <div class="titleBox">
        <span v-text="modelType == 1 ? '创建地址' : '修改地址'"></span>
        <span class="closeBtn" @click="close">×</span>
      </div>
      <div class="main-wrap">
        <div class="main-title">
          <span class="item-label star" v-text="modelType == 1 ? '新增收货地址' : '修改收货地址'"></span>
          <span>带 <em class="star">*</em> 号的为必填项</span>
        </div>
        <div class="main-item">
          <span class="item-label">选择地区 <em class="star">*</em></span>
          <div class="itemBox">
            <v-distpicker 
            @province="onProvince" 
            @city="onCity" 
            @area="onArea"
            :province="address_province" 
            :city="address_city" 
            :area="address_country" ></v-distpicker>
          </div>
        </div>
        <div class="main-item">
          <span class="item-label">详细地址 <em class="star">*</em></span>
          <div class="streetBox">
            <textarea v-model="address_detailed" placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息"></textarea>
          </div>
        </div>
        <div class="main-item">
          <span class="item-label">邮政编码 &nbsp</span>
          <div class="streetBox">
            <input v-model="address_zip_code" placeholder="如不清楚邮递区号，请填写000000" />
          </div>
        </div>
        <div class="main-item">
          <span class="item-label">收货人姓名 <em class="star">*</em></span>
          <div class="streetBox">
            <input v-model="address_name" placeholder="请输入收货人姓名" />
          </div>
        </div>
        <div class="main-item">
          <span class="item-label">手机号码 <em class="star">*</em></span>
          <div class="streetBox">
            <input v-model="address_mobile" placeholder="请输入收货人的手机号码" />
          </div>
        </div>
        <div class="main-item">
          <div class="errorBox star" v-text="errorTxt"></div>
        </div>
        <div class="main-item">
          <button class="addressBtn" @click="_add_editAddress">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from '@/components/VDistpicker/Distpicker'
import api from '@/api/address'
import storage from '@/common/storage'

export default {
  props: {
    onRefresh: {
      type: Function,
      default: undefined
    },
    modelType: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
      errorTxt: '',
      address_name: '',
      address_mobile: '',
      address_zip_code: '',
      address_province: '',
      address_city: '',
      address_country: '',
      address_detailed: ''
    }
  },
  methods: {
    // 关闭model
    close () {
      this.$emit('update:modelState', false)
    },
    // 选中省份
    onProvince (data) {
      this.address_province = data.value
    },
    // 选中市
    onCity (data) {
      this.address_city = data.value
    },
    // 选中区
    onArea (data) {
      this.address_country = data.value
    },
    // 添加/ 修改地址
    _add_editAddress () {
      if(this.address_province == '省'){
        this.errorTxt = '请选择省'
        return false
      }else if(this.address_city == '市'){
        this.errorTxt = '请选择市'
        return false
      }else if(this.address_country == '区'){
        this.errorTxt = '请选择区'
        return false
      }
      let paramObj = {
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        address_name: this.address_name,
        address_mobile: this.address_mobile,
        address_province: this.address_province, // 省
        address_city: this.address_city, // 市
        address_country: this.address_country, // 区
        address_detailed: this.address_detailed, // 详细
        address_zip_code: this.address_zip_code // 邮编
      }
      if(this.modelType == 2){
        paramObj.address_id = storage.s_getItem('addressItem').address_id
      }
      api.add_editAddress(this.modelType, paramObj)
      .then(res => {
        if(res.status === 'ok'){
          this.close()
          this.onRefresh()
        }else if(res.status === 'error'){
          this.errorTxt = res.data
        }
      })
    }
  },
  mounted () {
    if(this.modelType == 2){
      let addressInfo = storage.s_getItem('addressItem')
      this.address_name = addressInfo.address_name
      this.address_mobile = addressInfo.address_mobile
      this.address_province = addressInfo.address_province
      this.address_city = addressInfo.address_city
      this.address_country = addressInfo.address_country
      this.address_detailed = addressInfo.address_detailed
      this.address_zip_code = addressInfo.address_zip_code
    }
  },
  components: {
    VDistpicker
  }
}
</script>

<style scoped>
  .mk{
    background: #3a3a3a; 
    filter:alpha(opacity=60);
    opacity: 0.8;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }
  .addressBox{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 700px;
    height: 480px;
    z-index: 9999;
    background: #fff;
    overflow-x: hidden;
    margin-top: -240px;
    margin-left: -350px;
    border: 10px solid #b4b4b4;
  }
  .titleBox{
    background: #e6e6e6;
    border-bottom: 1px solid #d9d9d9;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
    font-weight: 700;
    font-size: 14px;
  }
  .closeBtn{
    display: inline-block;
    float: right;
    margin-right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
  .main-wrap{
    padding-top: 20px;
    font-weight: 450;
  }
  .main-title{
    position: relative;
    padding-left: 105px;
    padding-bottom: 10px;
    zoom: 1;
    text-align: left;
    z-index: 100;
    line-height: 26px;
    font-size: 12px;
  }
  .item-label{
    display: inline;
    float: left;
    width: 100px;
    margin-left: -105px;
    text-align: right;
    height: 26px;
    line-height: 26px;
  }
  .star{
    color: #fc6210;
  }
  .main-item{
    position: relative;
    padding-left: 105px;
    padding-bottom: 10px;
    zoom: 1;
    text-align: left;
    font-size: 12px;
  }
  .itemBox{
    height: 26px;
    line-height: 26px;
  }
  .streetBox textarea{
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 3px 5px;
    font-size: 12px;
    border-radius: 5px;
    width: 400px;
    height: 70px;
  }
  .streetBox input{
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 12px;
    width: 208px;
    height: 26px;
    padding: 0 5px;
  }
  .addressBtn{
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    border-radius: 5px;
    color: #fff;
    background-color: #fc6210;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
  }
</style>
