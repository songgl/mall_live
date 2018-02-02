<template>
  <div class="box" v-if="goodsList.length > 0">
    <div class="carTitleBox clearfix">
      <div class="carTitleItem">猜你喜欢</div>
    </div>
    <div class="clearfix goodsListBox">
      <div class="goodsItemBox" v-for="item in goodsList" :key="item.goods_id">
        <goods-item :goods-info='item'></goods-item>
      </div>
    </div>  
  </div>
</template>

<script>
import api from '@/api/goods'
import goodsItem from '@/components/goodsItem/goodsItem'
export default {
  data () {
    return {
      goodsList: {}
    }
  },
  methods: {
    _getMaybeEnjoy () {
      api.getMaybeEnjoy({
        pagesize: 5
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.goodsList = res.data
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
    this._getMaybeEnjoy()
  },
  components: {
    goodsItem
  }
}
</script>

<style scoped>
  .box{
    margin-top: 40px;
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
  .goodsListBox{
    padding-top: 20px;
  }
  .goodsItemBox{
    width: 25%;
    height: 350px;
    float: left;
    border: 1px solid #e5e5e5;
    margin: 0 5px 20px;
  }
</style>
