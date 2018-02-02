<template>
  <div class="wallbox">
 
    <div class="box ">
      <div class="box_start h-50 bg_fff">
         <div class="f20 pl-10">我的关注</div>
       </div> 
      <div class="w100 h-360 mt-20">
        <div class="w100 clearfix">
          <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="f_co_999 mt-10">店铺名：<span class="f_co_000">翠峰云</span> </div>
              <div class="f_co_999 mt-10">店铺综合评分：<span class="f_co_D7474C">10.00</span> </div>
              <div class="f_co_999 box_start mt-10"><span >店铺简介：</span><span class="grid_cell f_co_000 txwy">酒香不怕港子深怕港子深怕港子深</span> </div>
              <div class="salesEvalu mt-20">
                <span>销量:<em v-text=" 10"></em></span>
                <span>共:<em v-text=" 2000"></em>件商品</span>
              </div>
              <div class="w100 box_arou mt-20" >
                <div class="f_co_fff box_center bg_red w-70 h-26 borau-10">取消收藏</div>
                <div class="f_co_fff box_center bg_red w-70 h-26 borau-10">联系客服</div>
              </div>
          </div>
        </div>
        <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="f_co_999 mt-10">店铺名：<span class="f_co_000">翠峰云</span> </div>
              <div class="f_co_999 mt-10">店铺综合评分：<span class="f_co_D7474C">10.00</span> </div>
              <div class="f_co_999 box_start mt-10"><span >店铺简介：</span><span class="grid_cell f_co_000 txwy">酒香不怕港子深怕港子深怕港子深</span> </div>
              <div class="salesEvalu mt-20">
                <span>销量:<em v-text=" 10"></em></span>
                <span>共:<em v-text=" 2000"></em>件商品</span>
              </div>
              <div class="w100 box_arou mt-20" >
                <div class="f_co_fff box_center bg_red w-70 h-26 borau-10">取消收藏</div>
                <div class="f_co_fff box_center bg_red w-70 h-26 borau-10">联系客服</div>
              </div>
          </div>
        </div>
        <div class="goodsItemBox">
              <div class="itemContent">
                <div class="goodsImg">
                   <img src="../../../../assets/images/tu2@3x.png" alt="">
                </div>
              <div class="f_co_999 mt-10">店铺名：<span class="f_co_000">翠峰云</span> </div>
              <div class="f_co_999 mt-10">店铺综合评分：<span class="f_co_D7474C">10.00</span> </div>
              <div class="f_co_999 box_start mt-10"><span >店铺简介：</span><span class="grid_cell f_co_000 txwy">酒香不怕港子深怕港子深怕港子深</span> </div>
              <div class="salesEvalu mt-20">
                <span>销量:<em v-text=" 10"></em></span>
                <span>共:<em v-text=" 2000"></em>件商品</span>
              </div>
              <div class="w100 box_arou mt-20" >
                <div class="f_co_fff box_center bg_red w-70 h-26 borau-10">取消收藏</div>
                <div class="f_co_fff box_center bg_red w-70 h-26 borau-10">联系客服</div>
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
    width: 32%;
    /*padding-left: 20px;*/
    height: 350px;
    float: left;
    margin-bottom: 20px;
    margin-right: 2%;
  }
  .goodsItemBox:nth-of-type(3n){margin-right: 0; }
/*商品样式*/
.itemContent{
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    padding: 10px;
  }
  /*.itemContent:hover{
    box-shadow: 1px 1px 7px #999;
  }*/
  .goodsImg{
    height: 150px;
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
  .txwy{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
</style>
