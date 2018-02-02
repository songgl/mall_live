<template>
  <div class="wallbox">
 
    <div class="box ">
      <div class="box_start h-50 bg_fff">
         <div class="f20 pl-10">商品收藏</div>
       </div> 
      <div class="w100 h-360 mt-20">
        <div class="w100 clearfix">
          <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="priceBox">
                 <span class="now_price">¥<em >999</em></span>
                 <span class="origin_price">¥<em >9999</em></span>
              </div>
              <div class="goodsName" >酒香不怕港子深怕港子深怕港子深<span class="f_co_fff bg_red f10 ml-10 pl-5 pr-5">自营</span></div>
              <div class="salesEvalu">
                <span>评价:<em v-text=" 0"></em></span>
                <span>销量:<em v-text=" 0"></em></span>
              </div>
          </div>
        </div>
          <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="priceBox">
                 <span class="now_price">¥<em >999</em></span>
                 <span class="origin_price">¥<em >9999</em></span>
              </div>
              <div class="goodsName" >酒香不怕港子深<span class="f_co_fff bg_red f10 ml-10 pl-5 pr-5">自营</span></div>
              <div class="salesEvalu">
                <span>评价:<em v-text=" 0"></em></span>
                <span>销量:<em v-text=" 0"></em></span>
              </div>
          </div>
        </div>
          <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="priceBox">
                 <span class="now_price">¥<em >999</em></span>
                 <span class="origin_price">¥<em >9999</em></span>
              </div>
              <div class="goodsName" >酒香不怕港子深<span class="f_co_fff bg_red f10 ml-10 pl-5 pr-5">自营</span></div>
              <div class="salesEvalu">
                <span>评价:<em v-text=" 0"></em></span>
                <span>销量:<em v-text=" 0"></em></span>
              </div>
          </div>
        </div>
           <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="priceBox">
                 <span class="now_price">¥<em >999</em></span>
                 <span class="origin_price">¥<em >9999</em></span>
              </div>
              <div class="goodsName" >酒香不怕港子深<span class="f_co_fff bg_red f10 ml-10 pl-5 pr-5">自营</span></div>
              <div class="salesEvalu">
                <span>评价:<em v-text=" 0"></em></span>
                <span>销量:<em v-text=" 0"></em></span>
              </div>
          </div>
        </div>
       </div>
      </div>
      
    </div>

  </div>
  
</template>

<script>
import '@/assets/css/cuimeng_style.css'
import api from '@/api/api'
import storage from '@/common/storage'
import GoodsItem from '@/components/goodsItem/goodsItem'
export default {
  data () {
    return {
      userInfo: {},
      userphonestar:''
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
          this._rechangeUserphone(res.data.phone)
          this.setCookie('userInfo', res.data)
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data
          })
        }
      })
    },
    // 用户手机号加*
    _rechangeUserphone (phone) {
         this.userphonestar = phone.substring(0,3)+ "****" + phone.substring(7,11); 
    }
  },
  created () {
    this._getUserInfo();
   
  },
  components: {

  }
}
</script>

<style scoped>
 
  .wallbox{

  }
  .box{
    /*background-color: #fff;*/
    padding: 0 30px 30px 30px;
  }

  
  .grzl-ddnav {
  
  }
  .grzl-ddnav>div {
    width: 50%;
    float: left;
    margin-bottom: 40px;
}
.grzl-ddnav>div p {
    width: 100px;
    height: 100px;
    overflow: hidden;
    float: left;
}
.grzl-ddnav>div p img {
    width: 100%;
}
.grzl-ddnav>div ul {
    padding: 29px 0px;
    padding-left: 130px;
}
.grzl-ddnav>div ul li:first-child {
    font-size: 18px;
}
.grzl-ddnav>div ul li span {
    color: #fd655a;
    font-size: 18px;
}
.grzl-ddnav>div ul li a {
    color: #999;
}
.grzl-ddnav>div:first-child ul li a  {
    color: #ff6350;
}
.orderlist_item:last-child {
  border-bottom: none;
}
.goodsItemBox{
    width: 23%;
    /*padding-left: 20px;*/
    height: 350px;
    float: left;
    margin-bottom: 20px;
    margin-right: 2.6%;
  }
  .goodsItemBox:nth-of-type(4n){margin-right: 0; }
/*商品样式*/
.itemContent{
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    padding: 10px;
  }
  .itemContent:hover{
    box-shadow: 1px 1px 7px #999;
  }
  .goodsImg{
    height: 200px;
  }
  .priceBox{
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
  }
  .now_price{
    color: red;
    margin-right: 10px;
    font-size: 16px;
  }
  .origin_price{
    color: #999;
    text-decoration:line-through;
    font-size: 14px;
  }
  .goodsName{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    height: 38px;
    min-height: 38px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .salesEvalu{
    height: 20px;
    line-height: 20px;
  }
  .salesEvalu span{
    color: #999;
    font-size: 14px;
    margin-right: 10px;
  }
  .salesEvalu em{
    color: #145596;
  }
</style>
