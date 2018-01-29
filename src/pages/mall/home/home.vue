<template>
  <div class="pageBox">
    <my-nav @one-level="_oneLevel" @two-level="_twoLevel" :type="1"></my-nav>
    <div class="container">
      <div class="clearfix">
        <div class="banner">
          <my-banner :slides="bannerInfo"></my-banner>
        </div>
        <my-infor></my-infor>
      </div>
      <live-class></live-class>
      <recommend-list></recommend-list>
    </div>
  </div>
</template>

<script>
import api from '@/api/goods'
import storage from '@/common/storage'

import myNav from '../private/nav'
import myBanner from '@/components/banner/banner'
import myInfor from './private/information'
import liveClass from './private/liveClass'
import recommendList from './private/recommendList'

export default {
  data () {
    return {
      bannerInfo: []
    }
  },
  methods: {
    // 获取banner信息
    _getBanner () {
      api.getBanner({
        type: 1
      }).then((res) => {
        if(res.status === 'ok'){
          this.bannerInfo = res.data
        }else if(res.status === 'error'){
          console.log(res.error)
        }
      })
    },

    // 一级分类跳转事件
    _oneLevel (item) {
      let levelObj = {
        PaUuid: item.class_uuid,
        paName: item.class_name
      }
      storage.s_setItem('levelObj', levelObj)
      this.$router.push({
        path: 'goodsClass'
      })
    },

    // 二级分类跳转事件
    _twoLevel (paItem,item) {
      let levelObj = {
        PaUuid: paItem.class_uuid,
        paName: paItem.class_name,
        class_uuid: item.class_uuid
      }
      storage.s_setItem('levelObj', levelObj)
      this.$router.push({
        path: 'goodsClass'
      })
    }
  },
  created () {
    this._getBanner()
  },
  components: {
    myNav,
    myBanner,
    myInfor,
    liveClass,
    recommendList
  }
}
</script>

<style scoped>
  .banner{
    width: 700px;
    margin: 5px 5px 5px 200px;
    float: left;
  }
</style>
