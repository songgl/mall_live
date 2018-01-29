<template>
  <div class="meHeaderBox">
    <div class="headerContent clearfix">
      <div class="box-left clearfix">
        <router-link to="/" class="logoImg">
          <img src="../../../assets/images/corelogo.png" alt="">
        </router-link>
        <div @click="tabClick(1)" :class="{ tabAct: leftType == 1}" class="headerTxt">个人中心</div>
        <div @click="tabClick(2)" :class="{ tabAct: leftType == 2}" class="headerTxt">账号设置</div>
      </div>
      <router-link to="#" class="shoppingCar">购物车</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['leftType'],
    methods: {
      tabClick (type) {
        this.$emit('update:leftType', type)
        if(type == 1){
          this.$router.push({
            path: 'meDetails'
          })
        }else {
          this.$router.push({
            path: 'editUser'
          })
        }
      }
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
  .tabAct{
    color: #3F8FDF;
  }
  .box-left{
    float: left;
  }
  .logoImg{
    width: 120px;
    height: 70px;
    display: block;
    float: left;
  }
  .headerTxt{
    margin-left: 40px;
    font-size: 16px;
    height: 70px;
    line-height: 70px;
    float: left;
    cursor: pointer;
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
    float: right;
  }
</style>
