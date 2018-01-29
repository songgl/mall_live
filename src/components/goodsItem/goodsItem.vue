<template>
  <router-link :to="{path: 'goodsDetails', query: {goods_id: goodsInfo.goods_id}}" class="itemContent">
    <div class="goodsImg">
      <img :src="goodsInfo.goods_img" alt="">
    </div>
    <div class="priceBox">
      <span class="now_price">¥<em v-text="goodsInfo.goods_now_price"></em></span>
      <span class="origin_price">¥<em v-text="goodsInfo.goods_origin_price"></em></span>
    </div>
    <div class="goodsName" v-text="goodsInfo.goods_name"></div>
    <div class="salesEvalu">
      <span>评价:<em v-text="goodsInfo.comment_count || 0"></em></span>
      <span>销量:<em v-text="goodsInfo.total_sales || 0"></em></span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
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
