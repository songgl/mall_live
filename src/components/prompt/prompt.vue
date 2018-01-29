<template>
  <div v-if="promptState">
    <div class="promptBox">
      <div class="titleBox">
        <div class="titleTxt">友情提示</div>
        <div class="titleIcon" @click="close()">×</div>
      </div>
      <div class="content" v-html="promptData.content"></div>
    </div>
    <div class="mk"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    close () {
      this.setPromptState(false)
    },
    ...mapMutations({
      setPromptState: 'SET_PROMPTSTATE'
    })
  },
  computed: {
    ...mapGetters([
      'promptData',
      'promptState'
    ])
  }
}
</script>

<style scoped>
  .promptBox{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 300px;
    margin-top: -150px;
    margin-left: -200px;
    background-color: #fff;
    z-index: 999;
  }
  .titleBox{
    background-color: #3f8fdf;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
  .titleTxt{
    color: #fff;
    font-size: 18px;
    float: left;
  }
  .titleIcon{
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    width:40px;
    height: 40px;
    line-height: 40px;
    float: right;
  }
  .content{
    width: 400px;
    height: 260px;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    padding: 0px 20px 20px 20px;
    font-size: 16px;
  }
  .mk{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.8);
    z-index: 100;
  }
</style>
