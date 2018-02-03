<template>
  <div class="pageBox">
    <my-header></my-header>
    <div class="thisPage">
      <div class="thisContainer">
        <flow-path></flow-path>
        <div class="carInfoBox">
          <div class="carTitleBox clearfix">
            <div class="carTitleItem">全部商品<em v-text="carInfo.valid_count"></em></div>
          </div>
          <div class="car-main">
            <div class="clearfix">
              <div class="th-item th-1" :class="[allChecked ? 'on' : 'off']" @click="checkAllClick">全选</div>
              <div class="th-item th-2">商品信息</div>
              <div class="th-item th-3">属性</div>
              <div class="th-item th-4">单价</div>
              <div class="th-item th-5">数量</div>
              <div class="th-item th-6">金额</div>
              <div class="th-item th-7">操作</div>
            </div>
            <!-- 店铺列表 -->
            <div class="shopListBox" v-for="(shop, paIndex) in carInfo.valid_data" :key="shop.merchants_id">
              <div class="shop-info clearfix">
                <div class="checkBox" :class="[shop.checked ? 'check_icon_act' : 'check_icon']"  @click="shopCheckAllClick(paIndex)"></div>
                <div class="shopImg">
                  <img :src="shop.merchants_img" alt="">
                </div>
                <div class="shopName">店铺：<router-link :to="{path: '/mall/shopDetails', query: {merchants_id: shop.merchants_id}}" v-text="shop.merchants_name"></router-link></div>
              </div>
              <div class="goods-content">
                <!-- 商品列表 -->
                <div class="goods-item clearfix" v-for="(goods, index) in shop.goods" :key="goods.goods_id">
                  <div class="td td-chk" :class="[goods.checked ? 'on' : 'off']" @click="carGoodsItemClick(paIndex,index)"></div>
                  <div class="td td-item">
                    <div class="td-inner clearfix">
                      <div class="td-img">
                        <img :src="goods.goods_img" alt="">
                      </div>
                      <router-link :to="{path: '/mall/goodsDetails', query:{goods_id: goods.goods_id}}" class="td-info" v-text="goods.goods_name"></router-link>
                    </div>
                  </div>
                  <div class="td td-spec" v-text="goods.specification_names"></div>
                  <div class="td td-price">¥<em v-text="goods.goods_now_price"></em></div>
                  <div class="td td-num">
                    <div class="inputNumberBox clearfix">
                      <div class="minus numberBtn" @click='numberfn(paIndex, index, 1)'> - </div>
                      <div class="inputNumber">
                        <input readonly onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " @blur="blur(paIndex, index, goods.goods_num)" v-on:input='inputFun(paIndex, index, goods.goods_num)' v-model="goods.goods_num" type="text">
                      </div>
                      <div class="plus numberBtn" @click='numberfn(paIndex, index, 0)'> + </div>
                    </div>
                  </div>
                  <div class="td td-price">¥<em v-text="goods.goods_now_price * goods.goods_num"></em></div>
                  <div class="td td-op">
                    <span>删除</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="all-bra-warp clearfix">
              <div class="all-check" :class="[allChecked ? 'on' : 'off']" @click="checkAllClick">全选</div>
              <div class="delOn">删除</div>
              <div class="submit-btn on">结算</div>
              <div class="totalPrice">合计(不含运费): ¥<em v-text="totalMoney"></em></div>
              <div class="checkOnCount">已选商品<em>0</em>件</div>
            </div>
          </div>
        </div>
        <guess-like></guess-like>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import api from '@/api/shoppingCar'
import myHeader from '@/components/header/header'
import myFooter from '@/components/footer/footer'
import flowPath from './private/flowPath'
import guessLike from './private/guessLike'

export default {
  data () {
    return {
      count: 1,
      carInfo: {},
      validInfo: [], // 有效商品
      all_price: null, // 总价
      allChecked: false, // 是否全选
      totalMoney: 0, // 总价
      car_ids:[] // 购物车id数组
    }
  },
  methods: {
    // input 值改变触发
    inputFun (paIndex, index, num) {
      let goodsListObj = this.validInfo[paIndex].goods[index] // 当前的商品
      if(isNaN(num)){
        goodsListObj.goods_num = 1
      }
    },
    // input 失去焦点事件
    blur (paIndex, index, num) {
      let goodsListObj = this.validInfo[paIndex].goods[index] // 当前的商品
      if(num == ''){
        goodsListObj.goods_num = 1
      }
    },
    // 获取购物车商品列表
    _getCarGoods () {
      api.getCarGoods({
        uid: this.getCookie('uid'),
        token: this.getCookie('token')
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.carInfo = res.data
          /*
          * 遍历店铺与商品
          * 为其添加是否选中字段
          */
          this.validInfo = res.data.valid_data
          for(let i=0;i<this.validInfo.length;i++){
            this.validInfo[i].checked = false
            for(let a=0;a<this.validInfo[i].goods.length;a++){
              this.validInfo[i].goods[a].checked = false
            }
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },

    /*
    * 判断商品是否全部选中
    */
    isChooseAll () {
      let flag1 = true;
      for ( let i = 0; i < this.validInfo.length; i++ ) {
        if ( this.validInfo[i]['checked'] == false ) {
          flag1 = false;
          break;
        }
      }
      flag1 == true ? this.allChecked = true : this.allChecked = false;
    },

    /*
    * 全选
    */
    checkAllClick () {
      let flag = true;
      if ( this.allChecked ) {
        flag = false;
      }
      for ( let i = 0; i < this.validInfo.length; i++ ) {
        this.validInfo[i]['checked'] = flag;
        let list = this.validInfo[i]['goods'];
        for ( let k = 0, len1 = list.length; k < len1; k++ ) {
          list[k]['checked'] = flag;
        }
      }
      this.allChecked = !this.allChecked;
      this.carTotalMoney(); // 计算总价
    },
    
    /*
    * 店铺全选
    */
    shopCheckAllClick (index) {
      let listObj = this.validInfo[index]
      let goods = this.validInfo[index]['goods'] // 当前店铺下的商品数组

      if ( this.validInfo[index]['checked'] ) {
        for (let i = 0; i < goods.length; i++ ) {
          goods[i]['checked'] = false
        }
      } else {
        for (let i = 0; i < goods.length; i++ ) {
          goods[i]['checked'] = true
        }
      }
      // this.validInfo[index]['checked'] = !this.validInfo[index]['checked']; // Vue 不能检测这样变动的数组，所以视图不会更新

      listObj.checked = !listObj.checked
      this.$set(this.validInfo,index,listObj)
      
      this.isChooseAll() // 判断是否选择所有商品的全选
      this.carTotalMoney() // 计算总价
    },

    /*
    * 单个商品选中
    */
    carGoodsItemClick (paIndex,index) {
      let goodsArr = this.validInfo[paIndex]['goods'] // 当前店铺下的商品数组
      let goodsListObj = this.validInfo[paIndex].goods[index] // 当前的商品

      if ( goodsArr[index]['checked'] ) {
        this.validInfo[paIndex]['checked'] = false;
        this.allChecked = false;
        goodsListObj.checked = !goodsListObj.checked
        this.$set(goodsArr,index,goodsListObj)
      } else {
        goodsListObj.checked = !goodsListObj.checked
        this.$set(goodsArr,index,goodsListObj)

        // 判断当前店铺是否全选
        let flag = true
        for (let i = 0; i < goodsArr.length; i++ ) {
          if ( goodsArr[i]['checked'] == false ) {
            flag = false
            break;
          }
        }
        flag == true ? this.validInfo[paIndex]['checked'] = true : this.validInfo[paIndex]['checked'] = false
      }
      this.isChooseAll()    // 判断是否选择所有商品的全选
      this.carTotalMoney()  //计算总价
    },
    /*
    * 计算商品总金额
    */
    carTotalMoney () {
      let oThis = this
      this.totalMoney = 0
      for ( let i = 0; i < this.validInfo.length; i++ ) {
        let goods = this.validInfo[i]['goods']
        goods.forEach(function(item, index, arr) {
          if ( goods[index]['checked'] ) {
            oThis.totalMoney += parseFloat(item.goods_now_price) * parseFloat(item.goods_num)
          }
        });
      }
      console.log(oThis.totalMoney)
    },
    /*
    * 数量加减
    */
    numberfn (paIndex,index,type) { // type=0(加)，type=1(减)
      let merchantsObj = this.validInfo[paIndex],
          goodsObj = this.validInfo[paIndex].goods[index]

      api.carGoodsCount(type,{
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        car_id: goodsObj.car_id
      }).then((res) => {
        if(res.status === 'ok'){
          if(type == 0){
            goodsObj.goods_num++
          }else{
            goodsObj.goods_num--
          }
          this.carTotalMoney() // 计算总价
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
    this._getCarGoods()
  },
  components: {
    myHeader,
    myFooter,
    flowPath,
    guessLike
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
  .inputNumberBox{
    border: 1px solid #e5e5e5;
  }
  .numberBtn{
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    background-color: #e5e5e5;
    cursor: pointer;
  }
  .minus{
    float: left;
    border-right: 1px solid #e5e5e5;
  }
  .plus{
    float: right;
    border-left: 1px solid #e5e5e5;
  }
  .inputNumber{
    float: left;
    width: 68px;
    height: 30px;
    line-height: 30px;
    padding: 0 5px;
  }
  .inputNumber input{
    background-color: transparent;
    width: 100%;
    height: 100%;
    text-align: center;
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
  .th-1.on:before, .all-check.on:before{
    content: '';
    position: absolute;
    background: url(../../../assets/icon/chooseAct.png) no-repeat center;
    background-size: cover;
    width: 15px;
    height: 15px;
    bottom: 17px;
    left: 15px;
  }
  .th-1.off:before, .all-check.off:before{
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
    width: 150px;
  }
  .th-4{
    width: 120px;
  }
  .th-5{
    width: 140px;
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
    cursor: pointer;
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
    cursor: pointer;
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
    width: 315px;
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
  .td-spec{
    width: 150px;
    padding-top: 18px;
    text-align: center;
    color: #9c9c9c;
  }
  .td-price{
    width: 120px;
    color: red;
    font-weight: 700;
    padding-top: 18px;
    text-align: center;
  }
  .td-num{
    width: 140px;
    padding: 18px 5px;
  }
  .td-op{
    text-align: center;
    font-weight: 450;
    padding-top: 18px;
    width: 98px;
    cursor: pointer;
  }
  .td-op span:hover, .delOn:hover, .checkOnCount em{
    color: red;
  }
  .all-bra-warp{
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    background-color: #e5e5e5;
  }
  .all-check{
    position: relative;
    width: 100px;
    height: 50px;
    text-align: center;
    float: left;
    cursor: pointer;
  }
  .delOn{
    float: left;
    cursor: pointer;
  }
  .checkOnCount, .totalPrice{
    float: right;
    padding-right: 20px;
  }
  .totalPrice em{
    font-size: 18px;
    color: red;
  }
  .submit-btn{
    float: right;
    width: 120px;
    height: 50px;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
  .submit-btn.on{
    background-color: red;
    cursor: pointer;
  }
  .submit-btn.off{
    background-color: #B0B0B0;
    cursor: not-allowed;
  }
</style>
