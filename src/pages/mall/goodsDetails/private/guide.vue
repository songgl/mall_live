<template>
  <div class="box">
    <div class="container clearfix">
      <div class="guide-left">
        <router-link class="level" to="/">首页</router-link>
        > 
        <span class="level" @click="_oneLevel" v-text="goodsDetails.parent_class_name"></span>
        >
        <span class="level" @click="_twoLevel" v-text="goodsDetails.seed_class_name"></span>
        >
        <span class="goodsName" v-text="goodsDetails.goods_name"></span>
      </div>
      <div class="guide-right">
        <router-link :to="{path: 'shopDetails', query:{merchants_id: shopDetails.member_id}}" v-text="shopDetails.merchants_name"></router-link>
        <a :href="'tel:' + shopDetails.contact_mobile" class="shopPhone">联系商家</a>
        <span class="collection" :class="[shopDetails.is_follow == 1 ? 'on' : 'off']" @click="shopFollow">收藏店铺</span>
      </div>
    </div>
  </div>
</template>

<script>
import storage from '@/common/storage'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'goodsDetails',
      'shopDetails'
    ])
  },
  methods: {
    // 一级分类跳转事件
    _oneLevel () {
      let levelObj = {
        PaUuid: this.goodsDetails.parent_class_uuid,
        paName: this.goodsDetails.parent_class_name
      }
      storage.s_setItem('levelObj', levelObj)
      this.$router.push({
        path: 'goodsClass'
      })
    },

    // 二级分类跳转事件
    _twoLevel () {
      let levelObj = {
        PaUuid: this.goodsDetails.parent_class_uuid,
        paName: this.goodsDetails.parent_class_name,
        class_uuid: this.goodsDetails.seed_class_uuid
      }
      storage.s_setItem('levelObj', levelObj)
      this.$router.push({
        path: 'goodsClass'
      })
    },

    // 收藏按钮点击事件
    shopFollow () {
      this.$emit('shop-follow', this.shopDetails.is_follow)
    }
  }
}
</script>

<style scoped>
  .box{
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #f2f2f2;
  }
  .guide-left{
    float: left;
  }
  .level:hover, .guide-right a:hover{
    color: red;
  }
 .level{
    cursor: pointer;
  }
  .guide-left .goodsName{
    font-weight: bold;
  }
  .guide-right{
    float: right;
  }
  .shopPhone{
    position: relative;
    padding-left: 30px;
    margin: 0 20px;
  }
  .shopPhone:before{
    content: "";
    position: absolute;
    background: url(../../../../assets/icon/lianxishangjia.png) no-repeat;
    width: 18px;
    height: 20px;
    bottom: 0;
    left: 10px;
  }
  .collection{
    position: relative;
    padding-left: 30px;
    cursor: pointer;
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
</style>
