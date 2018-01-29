<template>
  <div class="box">
    <dl>
      <dt>订单中心</dt>
      <dd><router-link :to="{path: 'orderList'}">我的订单</router-link></dd>
      <dd><router-link :to="{path: 'refundOrder'}">退款订单</router-link></dd>
      <dd><router-link :to="{path: 'evaluateList'}">评价晒单</router-link></dd>
    </dl>
    <dl>
      <dt>我的收藏</dt>
      <dd><router-link :to="{path: 'goodsCollection'}">商品收藏</router-link></dd>
      <dd><router-link :to="{path: 'myFollow'}">我的关注</router-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  components: {

  }
}
</script>

<style scoped>
  .router-link-active{
    color: #3F8FDF
  }
  .box{
    background-color: #fff;
    padding: 20px 20px 5px 20px;
  }
  .box dl{
    margin-bottom: 20px;
  }
  .box dl dt{
    font-size: 18px;
    padding-bottom: 15px;
  }
  .box dl dd{
    font-size: 14px;
    padding-bottom: 10px;
  }
  .box a:hover{
    color: #3F8FDF
  }
</style>
