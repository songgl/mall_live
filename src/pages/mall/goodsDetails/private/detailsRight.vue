<template>
  <div class="box">
    <div class="titleBox clearfix">
      <div class="titleBtn on">商品详情</div>
      <div class="titleBtn off">商品评价</div>
    </div>
    <div class="contentBox">
      <div v-html="goodsDetails.goods_detail"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'goodsDetails'
    ])
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
  .box{
    width: 930px;
    float: right;
  }
  .titleBox{
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-bottom: 1px solid #3f8fdf;
  }
  .titleBtn{
    float: left;
    width: 120px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
  }
  .titleBtn.on{
    background-color: #3f8fdf;
    color: #fff;
  }
  .titleBtn.off:hover{
    color: #3f8fdf;
  }
  .contentBox{
    padding-top: 10px;
  }
</style>
