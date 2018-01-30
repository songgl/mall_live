<template>
  <div class="pageBox">
    <my-header></my-header>
    <div class="thisPage">
      <div class="thisContainer">
        <flow-path></flow-path>
        <div class="carInfoBox">
          <div class="carTitleBox clearfix">
            <div class="carTitleItem">全部商品<em>2</em></div>
          </div>
          <div class="car-main">
            <div class="clearfix">
              <div class="th-item th-1 off">全选</div>
              <div class="th-item th-2">商品信息</div>
              <div class="th-item th-3">属性</div>
              <div class="th-item th-4">单价</div>
              <div class="th-item th-5">数量</div>
              <div class="th-item th-6">金额</div>
              <div class="th-item th-7">操作</div>
            </div>
            <!-- 店铺列表 -->
            <div class="shopListBox">
              <div class="shop-info clearfix">
                <div class="checkBox check_icon"></div>
                <div class="shopImg">
                  <img src="//img.alicdn.com/tfs/TB1K2JqRpXXXXXHXFXXXXXXXXXX-800-600.png" alt="">
                </div>
                <div class="shopName">店铺：<router-link :to="{path: 'shopDetails', query: {id: 1}}">华为卓瑞尔专卖店</router-link></div>
              </div>
              <div class="goods-content">
                <!-- 商品列表 -->
                <div class="goods-item clearfix">
                  <div class="td td-chk off"></div>
                  <div class="td td-item">
                    <div class="td-inner clearfix">
                      <div class="td-img">
                        <img src="https://img.alicdn.com/bao/uploaded/i5/TB1dNR0m26H8KJjy0FjdfGXepXa_114233.jpg_80x80.jpg" alt="">
                      </div>
                      <router-link :to="{path: 'goodsDetails', query:{goods_id: 1}}" class="td-info">7888起【12期分期送礼】Apple/苹果 iPhone X 全网通4G手机苹果 x</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header/header'
import myFooter from '@/components/footer/footer'
import flowPath from './private/flowPath'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
    
  },
  components: {
    myHeader,
    myFooter,
    flowPath
  }
}
</script>

<style scoped>
  .thisPage{
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .thisContainer{
    min-height: 600px;
    padding-bottom: 60px;
    width: 990px;
    margin: auto;
  }
  .carInfoBox{
    margin-top: 20px;
  }
  .carTitleBox{
    height: 33px;
    border-bottom: 2px solid #e5e5e5;
  }
  .carTitleItem{
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    float: left;
    color: #3F8FDF;
    line-height: 1.1;
    border-bottom: 2px solid #3F8FDF;
    padding: 0 10px 14px;
  }
  .carTitleItem em{
    padding: 0 5px;
  }
  .th-item{
    float: left;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
  .th-1{
    width: 80px;
    padding-left: 15px;
    position: relative;
    cursor: pointer;
  }
  .th-1.on:before{
    content: '';
    position: absolute;
    background: url(../../../assets/icon/chooseAct.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
    bottom: 17px;
    left: 15px;
  }
  .th-1.off:before{
    content: '';
    position: absolute;
    background: url(../../../assets/icon/choose.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
    bottom: 17px;
    left: 15px;
  }
  .th-2{
    width: 280px;
  }
  .th-3{
    width: 170px;
  }
  .th-4{
    width: 120px;
  }
  .th-5{
    width: 120px;
  }
  .th-6{
    width: 120px;
  }
  .th-7{
    width: 100px;
  }
  .shopListBox{
    margin-top: 20px;
  }
  .shop-info{
    height: 20px;
    line-height: 20px;
    padding-left: 15px;
    margin-bottom: 10px;
  }
  .checkBox{
    float: left;
    margin-right: 10px;
    margin-top: 2px;
  }
  .check_icon{
    background: url(../../../assets/icon/choose.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
  }
  .check_icon_act{
    background: url(../../../assets/icon/chooseAct.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
  }
  .shopImg{
    float: left;
    width: 20px;
    height: 20px;
  }
  .shopName{
    float: left;
    margin-left: 10px;
  }
  .shopName a:hover, .td-info:hover{
    color: red;
    text-decoration: underline;
  }
  .goods-content{
    border: 1px solid #e5e5e5;
  }
  .goods-item{
    background: #fcfcfc;
    border-bottom: 1px solid #e7e7e7;
  }
  .goods-item .td{
    float: left;
    min-height: 119px;
    overflow: hidden;
    _overflow: visible;
    _zoom: 1;
  }
  .td-chk{
    width: 45px;
    position: relative;
  }
  .td-chk.on:before{
    content: '';
    position: absolute;
    background: url(../../../assets/icon/chooseAct.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
    top: 17px;
    left: 14px;
  }
  .td-chk.off:before{
    content: '';
    position: absolute;
    background: url(../../../assets/icon/choose.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
    top: 18px;
    left: 14px;
  }
  .td-item{
    width: 300px;
  }
  .td-item .td-inner{
    padding-top: 18px;
  }
  .td-img{
    width: 80px;
    height: 80px;
    float: left;
    border: 1px solid #e5e5e5;
  }
  .td-info{
    width: 218px;
    height: 80px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: block;
    float: left;
    font-size: 12px;
    font-weight: 450;
    padding-left: 10px;
  }
</style>
