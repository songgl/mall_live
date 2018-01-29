<template>
  <div>
    <div class="meHeaderBox">
      <div class="headerContent clearfix">
        <div class="fl clearfix">
          <router-link to="/" class="fl logoImg">
            <img src="../../../assets/images/corelogo.png" alt="">
          </router-link>
          <router-link :to="{path: 'meDetails'}" class="fl headerTxt">个人中心</router-link>
          <router-link :to="{path: 'editUser'}" class="fl headerTxt">账号设置</router-link>
        </div>
        <router-link to="#" class="fr shoppingCar">购物车</router-link>
      </div>
    </div>
    <div class="container">
      <div class="mePageBox clearfix">
        <div class="left-box">
          <my-left></my-left>
        </div>
        <div class="right-box">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyLeft from './private/left'  
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
    MyLeft
  }
}
</script>

<style scoped>
  .meHeaderBox{
    background-color: #fff;
    width: 100%;
  }
  .headerContent{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .router-link-active{
    color: #3F8FDF
  }
  .logoImg{
    width: 120px;
    height: 70px;
    display: block;
  }
  .headerTxt{
    margin-left: 40px;
    font-size: 16px;
    height: 70px;
    line-height: 70px;
  }
  .headerTxt:hover{
    color: #3F8FDF
  }
  .shoppingCar{
    display: block;
    height: 38px;
    line-height: 38px;
    border: 1px solid #f1f1f1;
    font-size: 14px;
    margin: 15px 0;
    padding: 0 20px;
  }
  .mePageBox{
    padding: 20px 0;
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
