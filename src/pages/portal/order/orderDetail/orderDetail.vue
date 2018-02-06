<template>
  <div>
    <div class="box">
       <div class="box_start ">
         <div class="f20 pl-30">订单信息</div>
       </div> 
       <div class="box_between w100 mt-30">
         <div class="w65 bor_r ">
            <div class="box_start mt-5">
                <div class="box_end w-100 h-40">收货人：</div>
                <div class="grid_cell h-36 box_start " v-text="OrderInfo.address_name"></div>
            </div>
            <div class="box_start mt-5">
                <div class="box_end w-100 h-40">支付方式：</div>
                <div class="grid_cell h-36 box_start ">{{OrderInfo.pay_way==='wx_pub_qr'?'微信支付':'在线支付'}}</div>
            </div>
            <div class="box_start mt-5">
                <div class="box_end w-100 h-40">买家留言：</div>
                <div class="grid_cell h-36 box_start " v-text="OrderInfo.order_remark||'空'"></div>
            </div>
            <div class=" box_start mt-5">
                <div class="box_end w-100 h-40">订单编号：</div>
                <div class="grid_cell h-36 box_start " v-text="OrderInfo.pay_no"></div>
            </div>
            <div class=" box_start mt-5">
                <div class="box_end w-100 h-40">创建时间：</div>
                <div class="grid_cell h-36 box_start " v-text="OrderInfo.create_time"></div>
            </div>
         </div>
         <div class="grid_cell flex-direction flex-justify_start " style="align-self:normal">
            <div class=" box_start mt-5">
                <div class="box_end w-100 h-40">订单状态：</div>
                <div class="grid_cell h-36 box_start f_co_fd655a" v-text="OrderInfo.order_state==='cancel'?'取消':OrderInfo.order_state==='wait_pay'?'待付款':OrderInfo.order_state==='wait_send'?'带发货':OrderInfo.order_state==='wait_receive'?'待确认收货':OrderInfo.order_state==='wait_assessment'?'待评价':OrderInfo.order_state==='end'?'已结束':''"></div>
            </div>
            <router-link v-if="OrderInfo.order_state==='wait_pay'" :to="{path: '/orderPay',query: {order_id:OrderInfo.order_id,order_no:OrderInfo.order_no}}" class="btn" >立即付款</router-link>
            <div class="btn" v-if="OrderInfo.order_state==='wait_receive'" v-on:click="_receiveOrder(OrderInfo.order_merchants_id)">确认收货</div>
            <div class="btn" v-if="OrderInfo.order_state==='end'" v-on:click="_deleteOrder(OrderInfo.order_merchants_id)" >删除订单</div>
           
         </div>
       </div>
       </div>

       <!-- 物流 -->
       <div class="box mt-10" v-if="LogInfo.Traces">
         <div class="box_start ">
            <div class="f20 pl-30">物流信息</div>
         </div> 
         <div class="box_between w100 mt-20">
           <div class="w30 ">
             <div class=" box_start mt-5">
                <div class="box_end w-100 h-40">运单号：</div>
                <div class="grid_cell h-36 box_start " v-text="OrderInfo.logistics_no"></div>
             </div>
             <div class=" box_start mt-5">
                <div class="box_end w-100 h-40">快递公司：</div>
                <div class="grid_cell h-36 box_start " v-text="OrderInfo.logistics_name"></div>
             </div>
           </div>
           <div class="grid_cell flex-direction flex-justify_start ">
              <el-steps direction="vertical" :active="1" space="50px">
                <el-step title="item.AcceptTime+item.AcceptStation" icon="index === 0 ? 'el-icon-location
':'el-icon-circle-check-outline'" v-for="(item,index) in LogInfo.Traces"></el-step>
              </el-steps>
           </div>
         </div>
       </div>

       <!-- 订单商品 -->
       <div class="box mt-10">
       <div class="ddlist-box ddxq-spxx bg-fff" style="padding:0px 30px 30px 30px;">
        <div class="product-info">产品信息</div>
        <div class="ddlist-nav">
          <ul>
            <li>商品</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
          </ul>
        </div>
        <div class="table " style="margin: 10px 0px 30px;">
            <table cellspacing="0" cellpadding="0">
              <tbody><tr v-for="shop in OrderInfo.orderBeans" class="">
                <td class="td1">
                  <div class="dd-l-list clearfix">
                    <ul>
                      <li class="img"><router-link :to="{path: '/mall/goodsDetails', query: {goods_id: shop.goods_id}}" ><img :src="shop.goods_img"></router-link></li>
                      <li class="txt"><a href="javascript:;" v-text="shop.goods_name"></a></li>
                    </ul>
                  </div>
                </td>
                <td class="td2"><span style="text-align:center;" >&yen;<em v-text="shop.specification_price"></em></span></td>
                <td class="td2"><span style="text-align:center;" >ｘ<em v-text="shop.goods_num"></em></span></td>
                <td class="td2"><span style="text-align:center;" >&yen;<em v-text="shop.specification_price*shop.goods_num"></em></span></td>
              </tr>
            </tbody></table>
        </div>
        <div class="d-s-money" style="background:#F8F8F8">
          <ul>
            <li>共<em v-text="OrderInfo.totalNum"></em>件商品：&yen;<span v-text="OrderInfo.order_actual_price"></span></li>
            <!-- <li>运费：<span >&yen;<span v-text="0"></span></span></li> -->
            <!-- <li>积分抵扣：<span >-&yen;<span v-text="OrderInfo.deduct_integral_value"></span></span></li> -->
            <!-- <li>优惠券：<span >-&yen;<span v-text="OrderInfo.deduct_integral_value"></span></span></li> -->
            <li>订单金额：<span class="red ">&yen;<span class="red" v-text="OrderInfo.order_actual_price"></span></span></li>
          </ul>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
import '@/assets/css/cuimeng_style.css'
import { Steps ,Step } from 'element-ui'
import storage from '@/common/storage'
import api from '@/api/order'

export default {
  data () {
    return {
     OrderInfo:{},
     LogInfo:{}
    }
  },
  methods: {
 // 获取订单详情
    _getOrderInfo () {
      api.getOrderDetails({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        order_merchants_id:parseInt(this.$route.query.order_merchants_id)
      }).then((res) => {
        console.log(res)
        if(res.status === 'ok'){
          this.OrderInfo = res.data;
          if(res.data.logistics_no){
           this._getLogInfo(res.data.logistics_no,res.data.logistics_pinyin)
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type:"error"
          })
        }
      })
    },
     // 获取订单物流
    _getLogInfo (logno,logpinyin) {
      api.getLogDetails({
        logistics_no: logno,
        logistics_pinyin: logpinyin
      }).then((res) => {
        console.log(res)
        if(res.status === 'ok'){
          this.LogInfo = res.data;
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type:"error"
          })
        }
      })
    },
      // 取消订单
    _cancelOrder (orid) {
      api.cancelOrder({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        order_merchants_id : orid
      }).then(res => {    
      if(res.status === 'ok'){     
        this.promptFun({
            content: res.data,
            type: 'true'
          })
         this._getOrderInfo();
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 确认收货订单
    _receiveOrder (orid) {
      api.receiveOrder({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        order_merchants_id : orid
      }).then(res => {    
      if(res.status === 'ok'){     
        this.promptFun({
            content: res.data,
            type: 'true'
          })
         this._getOrderInfo();
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 删除订单
    _deleteOrder (orid) {
      api.deleteOrder({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        order_merchants_id : orid
      }).then(res => {    
      if(res.status === 'ok'){     
        this.promptFun({
            content: res.data,
            type: 'true'
          })
        this.backFun();
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
  },
  created () {
   this._getOrderInfo();
  },
  mounted () {
    
  },
  components: {
    ElSteps: Steps,
    ElStep: Step

  }
}
</script>

<style scoped>
   .box{
    background-color: #fff;
    padding: 30px;
  }
  .btn {
    display: block;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
    margin-top: 50px;
    background-color:#3f8fdf; 
    /*border: 1px solid #3f8fdf;*/
    text-align: center;
}
.product-info {

    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #333333;
}
.ddlist-nav {
    height: 50px;
    line-height: 50px;
    background: #f1f2f6;
}
.ddlist-nav ul li:nth-child(1) {
    width: 405px;
}
.ddlist-nav ul li:nth-child(2) {
    width: 145px;
}
.ddlist-nav ul li:nth-child(3) {
    width: 145px;
}
.ddlist-nav ul li:nth-child(4) {
    width: 145px;
}
.ddlist-nav ul li {
    text-align: center;
    float: left;
}
.table table {
    border-collapse: collapse;
    width: 100%;
}
.ddlist-box tr {
    border: 1px solid #ebebeb;
}
.ddlist-box .td1 {
    width: 436px;
}
.ddlist-box td {
    border: 1px solid #ebebeb;
    padding: 30px 20px;
}
.dd-l-list:last-child {
    margin-bottom: 0px!important;
}
.dd-l-list:first-child {
    border: none;
}
.dd-l-list {
    margin-bottom: 0px;
    border-top: 1px solid #ebebeb;
}
.ddlist-box .td2 {
    color: #999;width: 145px;
}
.dd-l-list .img {
    width: 80px;
    height: 80px;
    overflow: hidden;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.dd-l-list li {
    display: inline-block;
    float: left;
    line-height: 80px;
}
.dd-l-list .txt {
    width: 190px;
    padding-left: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.dd-l-list .img img {
    width: 80px;
}
.ddlist-box .td2 span {
    display: block;
    color: #999;
}
.d-s-money {
    text-align: right;
    padding: 30px;
}
.d-s-money li {
    margin-bottom: 20px;
    color: #666;
}
.d-s-money span {
    display: inline-block;
    min-width: 120px;
    text-align: left;
    padding-left: 20px;
    color: #666;
}
.blue {
    color: #2173c5!important;
}
.d-s-money li:last-child {
    font-size: 24px!important;
    color: #333;
}
.red {
    color: #fd655a!important;
}
.el-step__icon{
  background: #e3e4e5!important;
}
.el-step__head.is-finish {
    color: #fd655a;
    border-color: #fd655a;
}
</style>
