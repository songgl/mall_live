<template>
  <div class="preview-wrap">
    <div class="goodsImgBox">
      <img :src="currentImg" alt="" />
    </div>
    <div class="imgItemBox clearfix">
      <span class="leftBtn" @click="leftClick"></span>
      <span class="rightBtn" @click="rightClick"></span>
      <div class="spec-item">
        <div class="clearfix indicatorBox" ref="indicatorBox" :style="indicatorBoxCss">
          <div class="indicatorImg" @mouseover="imgMouseover(item,index)" :class="{act: index == imgIndex}" v-for="(item, index) in goodsDetails.imgs">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'goodsDetails'
    ]),
    indicatorBoxCss () {
      return {
        width: this.goodsDetails.imgs.length * 78 + 'px',
        left: this.left + 'px',
        transition: 'left 2s'
      }
    }
  },
  data () {
    return {
      currentImg: null, // 当前图片
      imgIndex: 0,
      pages: 1, // 总页数
      currentPages: 1, // 当前页数
      left: 0, // 左边距
      remain: '' // 模值
    }
  },
  methods: {
    // 左移
    leftClick () {
      if(this.pages == 1){
        return false
      }else if(this.pages == 2){ // 如果只有2页
        this.left = 0
      }else if(this.pages > 2 && this.currentPages !=1){ // 如果是超过2页, 并且当前不是在第一页
        if(this.currentPages == 2){
          this.left = 0
        }else {
          this.left = this.left + 78 * 5
        }
        this.currentPages--
        return false
      }
    },
    // 右移
    rightClick () {
      if(this.pages == 1){
        return false
      }else if(this.pages == 2){ 
        this.left = -(78 * this.remain)
      }else if(this.pages > 2 && this.currentPages < this.pages){
        this.currentPages++
        if(this.currentPages == this.pages){
          this.left = this.left - 78 * this.remain
        }else {
          this.left = -(78 * 5 * (this.currentPages - 1))
        }
        return false
      }
    },
    // 图片hover
    imgMouseover (img, index) {
      this.currentImg = img
      this.imgIndex = index
    }
  },
  mounted () {
    this.currentImg = this.goodsDetails.imgs[0]
    this.pages = Math.ceil(this.goodsDetails.imgs.length / 5)
    this.remain = this.goodsDetails.imgs.length % 5
  }
}
</script>

<style scoped>
  .preview-wrap{
    float: left;
    width: 452px;
  }
  .goodsImgBox{
    width: 100%;
    height: 452px;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .imgItemBox{
    position: relative;
    margin-bottom: 20px;
  }
  .leftBtn{
    display: block;
    width: 18px;
    height: 34px;
    float: left;
    background: url(../../../../assets/icon/g_left.png) no-repeat center;
    background-size: cover;
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 0;
    margin-top: -18px;
  }
  .rightBtn{
    display: block;
    width: 18px;
    height: 34px;
    float: right;
    background: url(../../../../assets/icon/g_right.png) no-repeat center;
    background-size: cover;
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 0;
    margin-top: -18px;
  }
  .spec-item{
    width: 390px;
    height: 60px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .indicatorBox{
    position: absolute;
    height: 60px;
    width: 390px;
  }
  .indicatorImg{
    padding: 2px 12px;
    float: left;
  }
  .indicatorImg img{
    width: 54px;
    height: 54px;
  }
  .indicatorImg.act img{
    border: 2px solid red;
  }
</style>
