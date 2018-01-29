<template>
  <div class="info-wrap">
    <div class="goodsName" v-text="goodsDetails.goods_name"></div>
    <div class="summaryBox">
      <div class="origin_price">原价：<span v-text="origin_price"></span></div>
      <div class="now_price">现价：<span v-text="now_price"></span></div>
      <div class="stock">库存：<span v-text="max"></span></div>
      <div class="salesEvalu">
        <span>评价：<em v-text="goodsDetails.comment_count || 0"></em></span>
        <span>销量：<em v-text="goodsDetails.total_sales || 0"></em></span>
      </div>
    </div>
    <div class="chooseAttrsBox">
      <div class="attrsItemBox clearfix" v-for="(paItem, paIndex) in goodsDetails.goodsSpecificationBeans" :key="paItem.specification_id">
        <div class="itemTitle" v-text="paItem.specification_value + ':'"></div>
        <div class="item" :class="{act: item.specification_id == specId[paIndex]}" v-for="(item, index) in paItem.specificationBeans" :key="item.specification_id" v-text="item.specification_value" @click="specItemClick(paIndex, item.specification_id)"></div>
      </div>
    </div>
    <div class="chooseBtns clearfix">
      <el-input-number 
        v-model="count" 
        controls-position="right" 
        @change="handleChange" 
        :min="1" 
        :max="max" ></el-input-number>
      <div class="joinCarBtn" @click="_plusShopCar">加入购物车</div>
      <div class="joinCarBtn" @click="nowBuy">立即购买</div>
    </div>
    <div class="clearfix">
      <div class="share">分享</div>
      <div class="collection" :class="[isCollection == 1 ? 'on' : 'off']" @click="_goodsCollection">收藏商品</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api/goods'
import storage from '@/common/storage'
import { InputNumber } from 'element-ui'

export default {
  data () {
    return {
      count: 1,
      specId: [], // 存放选中的规格ID
      specInfo: {},
      max: null, // 上限
      origin_price: null, // 原价
      now_price: null, // 现价
      isCollection: null
    }
  },
  computed: {
    ...mapGetters([
      'goodsDetails'
    ])
  },
  watch: {
    goodsDetails () {
      this.isCollection = this.goodsDetails.is_collect
      if(this.goodsDetails.goodsSpecificationBeans.length > 0){
        let paItem = this.goodsDetails.goodsSpecificationBeans
        for(let i = 0; i < paItem.length; i++){
          this.specItemClick(i, paItem[i].specificationBeans[0].specification_id)
        }
      }else{
        this.max = parseInt(this.goodsDetails.goods_stock)
        this.origin_price = this.goodsDetails.goods_origin_price
        this.now_price = this.goodsDetails.goods_now_price
      }
    }
  },
  methods: {
    // 加
    plus () {
      this.count++
    },
    // 减
    minus () {
      if(this.count <= 1) {
        this.count = 1
        return false
      }
      this.count--
    },
    // 数量输入框选择事件
    handleChange () {

    },
    // 获取选中的规格的库存及价格
    _getSpecInfo () {
      api.getSpecInfo({
        goods_id: this.goodsDetails.goods_id,
        specification_ids: this.specId.join(',')
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.specInfo = res.data
          this.max = parseInt(res.data.specification_stock)
          this.origin_price = res.data.specification_price
          this.now_price = res.data.specification_sale_price
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 规格item 点击事件
    specItemClick (paIndex,id) { // 外层循环下标，选中规格ID
      this.$set(this.specId, paIndex, id)
      if(this.specId.length == this.goodsDetails.goodsSpecificationBeans.length){
        this._getSpecInfo()
      }
    },

    // 商品收藏与取消收藏
    _goodsCollection () {
      api.goodsCollection({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        goods_id: this.goodsDetails.goods_id
      }).then(res => {
        if(res.status === 'ok'){
          this.isCollection = res.data
          if(res.data == 1){
            this.promptFun({
              content: '恭喜您，商品收藏成功，您可在个人中心我的收藏中查看！',
              type: 'success'
            })
          }else{
            this.promptFun({
              content: '取消收藏成功',
              type: 'success'
            })
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },

    // 加入购物车
    _plusShopCar () {
      api.plusShopCar({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        goods_id: this.goodsDetails.goods_id,
        goods_num: this.count,
        specification_id: this.specInfo.specification_id || ''
      }).then(res => {
        if(res.status === 'ok'){
          this.promptFun({
            content: res.data,
            type: 'success'
          })
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },

    // 立即购买
    nowBuy () {
      let confirmOrder = {
        goods_id: this.goodsDetails.goods_id,
        goods_num: this.count,
        specification_id: this.specInfo.specification_id || ''
      }
      storage.s_setItem('confirmOrder', confirmOrder)
      this.$router.push({
        path: '/confirmOrder'
      })
    }
  },
  mounted () {
    
  },
  components: {
    ElInputNumber: InputNumber
  }
}
</script>

<style scoped>
  .info-wrap{
    float: right;
    width: 700px;
  }
  .goodsName{
    font-size: 18px;
    padding-top: 10px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .summaryBox{
    background-color: #f5f5f5;
    padding: 20px;
    font-weight: bold;
  }
  .origin_price{
    text-decoration: line-through;
    font-size: 16px;
    color: #999;
    margin-bottom: 10px;
  }
  .now_price{
    color: red;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .stock{
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .salesEvalu span{
    color: #666;
    font-size: 16px;
    margin-right: 20px;
  }
  .chooseAttrsBox{
    padding: 20px;
  }
  .attrsItemBox{
    line-height: 35px;
    margin-bottom: 10px;
  }
  .itemTitle {
    float: left;
    font-size: 16px;
    min-width: 70px;
    text-align: left;
  }
  .item{
    float: left;
    margin: 0 0 10px 10px;
    padding: 0 15px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
  .item.act, .item:hover{
    color: red;
    border: 1px solid red
  }
  .chooseBtns{
    margin-bottom: 20px;
  }
  .joinCarBtn{
    background-color: #3f8fdf;
    color: #fff;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    float: left;
    margin-left: 40px;
    cursor: pointer;
  }
  
  .share:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/fx.png) no-repeat center;
    background-size: cover;
    width: 18px;
    height: 18px;
    bottom: 2px;
    left: 10px;
  }
  .share, .collection{
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    float: left;
    margin-right: 20px;
  }
  .off:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/sc.png) no-repeat center;
    background-size: cover;
    width: 18px;
    height: 18px;
    bottom: 2px;
    left: 10px;
  }
  .on:before{
    content: '';
    position: absolute;
    background: url(../../../../assets/icon/sc2.png) no-repeat center;
    background-size: cover;
    width: 18px;
    height: 17px;
    bottom: 2px;
    left: 10px;
  }
  .el-input-number{
    float: left;
  }
</style>
