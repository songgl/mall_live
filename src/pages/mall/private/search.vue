<template>
  <div class="box">
    <div class="container clearfix ">
      <router-link to="/" class="logoBox">
        <img :src="logo" alt="logo" />
      </router-link>
      <div class="searchBox clearfix">
        <div class="inputBox">
          <input type="text" placeholder="请输入您要搜索的商品名称">
        </div>
        <div class="searchBtn">搜索</div>
      </div>
      <div class="codeBox">
        <div class="codeTxt">APP下载</div>
        <div class="codeImg">
          <img src="../../../assets/images/code.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImg from '@/assets/images/corelogo.png'
export default {
  data () {
    return {
      logo: logoImg
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
  .box{
    background: #fff;
    padding: 25px 0 15px 0;
  }
  .logoBox{
    width: 120px;
    height: 70px;
    float: left;
    display: block;
  }
  .searchBox{
    margin-left: 140px;
    margin-top: 10px;
    float: left;
  }
  .inputBox {
    width: 400px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border: 1px solid #3F8FDF;
    padding: 0 5px 0 5px;
    float: left;
  }
  .inputBox input{
    width: 100%;
    height: 38px;
    background-color: transparent;
  }
  .searchBtn{
    width: 90px;
    height: 40px;
    line-height: 40px;
    background-color: #3F8FDF;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    float: right;
  }
  .codeBox{
    float: right;
  }
  .codeImg{
    width: 55px;
    height: 55px;
    padding: 2px;
    border: 1px solid #ccc;
  }
  .codeTxt{
    text-align: center;
    color: #3F8FDF;
    font-size: 12px;
    margin-bottom: 5px;
  }
</style>
