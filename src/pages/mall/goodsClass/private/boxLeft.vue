<template>
  <div class="box-left">
    <div class="titleBox">推荐商品</div>
    <goods-item :goods-info='item' v-for="item in goodsList" :key="item.goods_id"></goods-item>
  </div>
</template>

<script>
import api from '@/api/goods'
import GoodsItem from '@/components/goodsItem/goodsItem'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  methods: {
    // 获取推荐商品列表
    _getMaybeEnjoy () {
      api.getMaybeEnjoy({
        pagesize: 5
      })
      .then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.goodsList = res.data
        }else if(res.status === 'error'){
          this.promptFun({
            contnent: res.data,
            type: 'error'
          })
        }
      })
    }
  },
  created () {
    this._getMaybeEnjoy()
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
  .box-left{
    float: left;
    width: 240px;
  }
  .titleBox{
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #e5e5e5;
  }
  .itemContent{
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 20px;
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
