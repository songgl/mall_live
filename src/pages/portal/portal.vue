<template>
  <div class="pageBox">
    <my-header></my-header>
    <header-content :left-type.sync="leftType"></header-content>
    <div class="container mePageBox">
      <div class=" clearfix">
        <div class="left-box">
          <portal-left :left-type="leftType"></portal-left>
        </div>
        <div class="right-box">
          <navigation>
            <router-view />
          </navigation>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/header/header'
import MyFooter from '@/components/footer/footer'

import portalLeft from './private/portalLeft'
import HeaderContent from './private/headerContent'
export default {
  data () {
    return {
      leftType: 1
    }
  },
  beforeRouteUpdate (to, from, next) {
    if(to.path == '/portal/editUser' || to.path == '/portal/myAddress'){
      this.leftType = 2
    }else {
      this.leftType = 1
    }
    next()
  },
  components: {
    MyHeader,
    MyFooter,
    HeaderContent,
    portalLeft
  }
}
</script>

<style scoped>
  .mePageBox{
    padding: 20px 0;
    min-height: 600px;
  }
  .left-box{
    float: left;
    width: 220px;
  }
  .right-box{
    float: right;
    width: 960px;
  }
</style>
