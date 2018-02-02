<template>
  <div class="payCodeBox">
    <div class="mk"></div>
    <div class="qrCodeBox">
      <qrcode :value="value" :options="{ size: 300}"></qrcode>
      <div class="btnBox">
        <span @click="btnItem">完成支付</span>
        <span @click="btnItem">取消支付</span>
      </div>
    </div>
  </div>
</template>

<script>
import qrcode from '@xkeshi/vue-qrcode'
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    btnItem () {
      this.$router.replace({
        path:'/portal/orderList'
      })
    }
  },
  components: {
    qrcode
  }
}
</script>

<style scoped>
  .payCodeBox{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .mk{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.8);
    z-index: 100;
  }
  .qrCodeBox{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 320px;
    height: 360px;
    padding: 10px;
    background-color: #fff;
    margin-top: -210px;
    margin-left: -230px;
    z-index: 101;
  }
  .btnBox{
    height: 40px;
    line-height: 40px;
  }
  .btnBox span{
    width: 49%;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }
  .btnBox span:hover{
    background: #80b2ff;
    color: #fff;
  }
</style>
