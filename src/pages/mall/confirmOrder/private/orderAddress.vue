<template>
  <div class="orderAddressBox">
    <div class="titleBox clearfix">
      <span>确认收货地址</span>
      <router-link class="deliver" :to="{path: 'address', query:{}}">管理收货地址</router-link>
    </div>
    <ul class="address-list">
      <li class="address-wrap clearfix" :class="{selected: selectAddressId == item.address_id}" v-for="(item, index) in addressList" :key="item.address_id" @click="choiceItem(item)">
        <div class="onAddress" v-show="selectAddressId == item.address_id">
          <div class="marker">寄送至</div>
        </div>
        <div class="radioIcon"></div>
        <div class="addressInfo">
          <span v-text="item.address_province"></span>
          <span v-text="item.address_city"></span>
          <span v-text="item.address_country"></span>
          <span v-text="item.address_detailed"></span>
          <span>(<span v-text="item.address_name"></span> 收)</span>
          <span v-text="item.address_mobile"></span>
        </div>
        <div class="isDefault" v-show="item.is_default == 1">默认地址</div>
        <div class="isDefault isDefaultNo" v-show="item.is_default == 0" @click.stop="setDefault(item.address_id)">设为默认地址</div>
        <div class="edit_address" v-show="selectAddressId == item.address_id" @click.stop="add_editAddress(2)">修改本地址</div>
      </li>
    </ul>
    <div class="addBtn" @click="add_editAddress(1)">添加新地址</div>
    <my-address :on-refresh="_getAddressList" :model-state.sync="modelState" :model-type="modelType" v-if="modelState"></my-address>
  </div>
</template>

<script>
import api from '@/api/address'
import storage from '@/common/storage'
import MyAddress from '@/components/address/address'
export default {
  data () {
    return {
      modelState: false,
      modelType: 1, // 1为新增，2为修改
      addressList: [],
      selectAddressId: '',
    }
  },
  methods: {
    // 选择地址
    choiceItem (item) {
      this.selectAddressId = item.address_id
      storage.s_setItem('addressItem', item)
      this.$emit('on-selected', item)
    },

    // 获取地址列表
    _getAddressList (type) {
      api.getAddressList({
        uid: this.getCookie('uid'),
        token: this.getCookie('token')
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.addressList = res.data
          if(!type){
            this.choiceItem(res.data[0])
          }
        }else if(res.status === 'error'){
          this.pormptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    
    // 新增／修改地址按钮点击事件
    add_editAddress (type) {
      this.modelState = true
      this.modelType = type
    },

    // 设置默认
    setDefault (address_id) {
      api.setDefalutAddress({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        address_id
      }).then(res => {
        if(res.status === 'ok'){
          this._getAddressList(2)
        }else if(res.status === 'error'){
          this.pormptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    }
  },
  created () {
    this._getAddressList()
  },
  components: {
    MyAddress
  }
}
</script>

<style scoped>
  .orderAddressBox{
    margin: 20px 0 40px;
  }
  .titleBox{
    border-bottom: 2px solid #f1f1f1;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  .deliver{
    float: right;
    color: #3F8FDF;
    font-size: 12px;
    font-weight: 400;
  }
  .deliver:hover, .edit_address:hover{
    color: red;
  }
  .address-list li {
    position: relative;
    line-height: 25px;
    padding-left: 66px;
    border: 1px solid #fff;
    line-height: 32px;
    font-size: 12px;
  }
  .address-list li.selected {
    border-color: #f40;
    background-color: #fff0e8;
    margin: 5px 0 7px;
    box-shadow: 5px 5px 0 #f3f3f3;
    font-weight: 700;
    font-size: 14px;
  }
  .address-wrap:hover{
    background-color: #fff0e8;
    cursor: pointer;
  }
  .address-wrap:hover .isDefaultNo{
    display: block;
  }
  .onAddress{
    position: absolute;
    top: 0;
    left: 0;
    width: 75px;
    height: 32px;
  }
  .addressInfo{
    float: left;
    position: relative;
  }
  .isDefaultNo{
    display: none;
  }
  .isDefaultNo:hover{
    color:red;
  }
  .isDefault{
    float: left;
    margin-left: 20px;
  }
  .edit_address{
    float: right;
    color: #3F8FDF;
    font-size: 12px;
    cursor: pointer;
    padding-right: 10px;
  }
  .marker{
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #3F8FDF;
    padding-left: 30px;
  }
  .marker:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/add.png) no-repeat center;
    background-size: cover;
    width: 16px;
    height: 22px;
    bottom: 5px;
    left: 10px;
  }
  .selected .radioIcon{
    background: url(../../../../assets/icon/radioAct.png) no-repeat center;
    background-size: cover;
  }
  .radioIcon{
    float: left;
    width: 20px;
    height: 20px;
    margin: 6px 10px 0;
    background: url(../../../../assets/icon/radio.png) no-repeat center;
    background-size: cover;
  }
  .addBtn{
    background: #3F8FDF;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin: 20px 78px 0;
    cursor: pointer;
  }
</style>
