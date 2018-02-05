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
</style>
