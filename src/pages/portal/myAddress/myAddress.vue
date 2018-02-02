<template>
  <div>
    <div class="wdddbox">
       <div class="shdz-box bg_fff ">
         <div class="tit f_co_999"><span class="cursor" @click="add_editAddress(1)">新增收货地址</span>你已经创建 <em>{{addLength}}</em> 个收货地址，最多可创建6个</div>
         <div class="shdz-list " v-for="item in addresslistinfo">
            <span class="cursor" v-on:click="delete_address(item.address_id)">×</span>
            <!-- <span class="cursor" v-on:click="_test(item.address_id)">×</span> -->
            <ul>
              <li ><label>收货人：</label ><span v-text="item.address_name"></span></li>
              <li ><label style="float: left;">详细地址：</label>{{item.address_province+item.address_city+item.address_country+item.address_detailed}}</li>
              <li ><label>手机号：</label>{{item.address_mobile}}</li>
              <li ><label>邮编：{{item.address_zip_code}}</label>
                <a href="javascript:;" @click="add_editAddress(2)">编辑</a><a href="javascript:;" class="act" v-if="item.is_default=='1'">默认地址</a><a href="javascript:;" class="" v-on:click="setDefault(item.address_id)" v-if="item.is_default=='0'">设为默认</a></li>
            </ul>
         </div>
       </div>
     </div>
    <my-address :on-refresh="_getaddresslistinfo" :model-state.sync="modelState" :model-type="modelType" v-if="modelState"></my-address>

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
      addresslistinfo: {},
      modelType: 1, // 1为新增，2为修改
      addLength:0
    }
  },
  methods: {
// 获取地址列表
    _getaddresslistinfo () {
      api.getAddressList({
        uid: this.getCookie('uid'),
        token: this.getCookie('token')
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.addresslistinfo = res.data
          this.addLength = res.data.length||0
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 删除地址
  delete_address (address_id) {
    api.delAddress({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        address_id
      }).then(res => {
        if(res.status === 'ok'){
          this._getaddresslistinfo();
          this.promptFun({
            content: res.data,
            type: 'true'
          })
        }else if(res.status === 'error'){
          this.promptFun({
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
        this.promptFun({
            content: res.data,
            type: 'true'
          })
         this._getaddresslistinfo();
        }else if(res.status === 'error'){
          this.pormptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
  },
  _test (tt) {
    console.log(tt)
  }
  },
  
  created () {
      this._getaddresslistinfo();
  },
   mounted () {
    
  },
  components: {
    MyAddress
  }
}
</script>

<style scoped>
  .wdddbox {
    padding: 0px 30px;
    background: #fff;
    padding-bottom: 50px;
}
.shdz-box {
    padding: 60px 30px 60px 60px;
}
.shdz-box>.tit span {
    padding: 10px 10px;
    font-size: 18px;
    color: #fff;
    background: #3f8fdf;
    margin-right: 20px;
    border-radius: 10px;
    cursor: default;
}
.shdz-list {
    border: 1px solid #ebebeb;
    padding: 40px 60px 20px 30px;
    margin-top: 60px;
    position: relative;
}
.shdz-list>span {
    float: right;
    font-size: 30px;
    color: #999;
    display: block;
    position: absolute;
    right: 0px;
    top: 0px;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: default;
}
.shdz-list li {
    margin-bottom: 20px;
}
.shdz-list label {
    color: #999;
}
.shdz-list a {
    float: right;
    color: #3f8fdf;
    margin-left: 20px;
}
.shdz-list a.act {
    background: #fd655a;
    color: #fff;
    padding: 2px 10px;
}
</style>
