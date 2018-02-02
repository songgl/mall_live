<template>
  <div>
    <div class="box" v-for="item in recommendList">
      <div class="titleBox" v-text="item.title">名优特产</div>
      <div class="clearfix">
        <router-link to="" class="c_left">
          <img :src="item.img" alt="" />
        </router-link>
        <div class="c_right clearfix">
          <div class="goodsItemBox" v-for="goods in item.seedBeans" :key="goods.goods_id">
            <goods-item :goods-info="goods"></goods-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/goodsItem/goodsItem'
import api from '@/api/goods'
export default {
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    // 获取首页推荐商品
    _getHomeGoods () {
      api.getHomeGoods()
      .then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.recommendList = res.data
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
    this._getHomeGoods()
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
  .box{
    margin-bottom: 20px;
  }
  .titleBox{
    height: 30px;
    line-height: 30px;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .c_left{
    height: 710px;
    width: 230px;
    float: left;
    display: block;
    margin-bottom: 10px;
  }
  .c_right{
    height: 710px;
    width: 970px;
    float: left;
  }
  .c_left:hover{
    box-shadow: 1px 1px 7px #999;
  }
  .goodsItemBox{
    width: 25%;
    padding-left: 20px;
    height: 350px;
    float: left;
    margin-bottom: 20px;
  }
</style>
