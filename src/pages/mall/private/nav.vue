<template>
  <div class="box">
    <div class="container clearfix">
      <div class="fl goodsClassBox">
        <div class="classTitle">
          <div class="fl txt">商品分类</div>
          <div class="fr title-icon" @click="navToggle()"></div>
        </div>
        <ul class="classListBox" v-show="navState">
          <li v-for="item in oneLevel" :ket="item.class_id" @mouseover="levelFun(1,item)" @mouseout="levelFun(0)" @click="oneLevelGo(item)" v-text="item.class_name"></li>
        </ul>
        <div class="list-center clearfix" v-show="listCenter" @mouseover="levelFun(1)" @mouseout="levelFun(0)">
          <div class="list fl" v-for="list in twoLevel" :key="list.class_id">
            <div class="listTitle" @click="twoLevelGo(paItem,list)" v-text="list.class_name"></div>
          </div>
        </div>
      </div>
      <div class="fr navBox">
        <span>首页</span>
        <span>直播</span>
        <span>意见反馈</span>
        <span>帮助中心</span>
        <span>关于我们</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/goods'
import storage from '@/common/storage'
import { mapGetters } from 'vuex'
export default {
  props: ['type'],
  data () {
    return {
      oneLevel: [],
      twoLevel: [],
      listCenter: false,
      paItem: {}
    }
  },
  methods: {
    //  获取一级分类
    _getOneLevel () {
      api.getOneLevel()
      .then((res) => {
        if(res.status === 'ok'){
          this.oneLevel = res.data
        }else if(res.status === 'error'){
          console.log(res.data)
        }
      })
    },
    // 获取二级分类
    _getTwoLevel (item) {
      this.paItem = item
      api.getTwoLevel({
        class_uuid: item.class_uuid
      }).then((res) => {
        if(res.status === 'ok'){
          this.twoLevel = res.data
        }else if(res.status === 'error'){
          console.log(res.data)
        }
      })
    },
    levelFun (type,item) {
      if(type == 1){
        if(item){
          this._getTwoLevel(item)
        }
        this.listCenter = true
      }else{
        this.listCenter = false
      }
    },
    // 分类显示隐藏事件
    navToggle () {
      if(this.type != 1){
        this.setGoodsNav(this.goodsNavState)
      }
    },

    // 一级分类跳转事件
    oneLevelGo (item) {
      this.setGoodsNav(true)
      this.listCenter = false
      this.$emit('one-level',item)
    },

    // 二级分类跳转事件
    twoLevelGo (paItem,item) {
      this.setGoodsNav(true)
      this.listCenter = false
      this.$emit('two-level',paItem,item)
    }
    
  },
  computed: {
    ...mapGetters([
      'goodsNavState'
    ]),
    navState () {
      return this.$route.path != '/mall/home' ? this.goodsNavState : true
    }
  },
  created () {
    this._getOneLevel()
  }
}
</script>

<style scoped>
  .box{
    position: relative;
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #3F8FDF;
  }
  .goodsClassBox{
    width: 195px;
    position: relative;
  }
  .classTitle{
    background-color: #4DA0F3;
    height: 40px;
    line-height: 40px;
  }
  .classTitle .txt{
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    margin-left: 20px;
  }
  .title-icon{
    float: right;
    width: 20px;
    height: 20px;
    background: url(../../../assets/icon/fenlei2.png) no-repeat center;
    background-size: 20px 20px;
    margin: 10px 10px;
    cursor: pointer;
  }
  .classListBox{
    position: absolute;
    top: 40px;
    left: 0;
    width: 195px;
    height: 400px;
    background-color: #3F8FDF;
    padding-top: 10px;
    color: #fff;
    z-index: 100;
  }
  .classListBox li{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    cursor: pointer;
  }
  .classListBox li:hover{
    background-color: #ff9e31
  }
  .list-center{
    position: absolute;
    top: 43px;
    left: 195px;
    width: 705px;
    height: 397px;
    background-color: #fff;
    z-index: 99;
    padding: 10px 15px;
  }
  .list{
    margin: 10px 18px;
    cursor: pointer;
  }
  .list:hover{
    color: red;
  }
  .listTitle{
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
  }
  .navBox{
    width: 1005px;
    height: 40px;
    line-height: 40px;
    padding: 0 30px;
    font-size: 16px;
  }
  .navBox span{
    cursor: pointer;
    padding: 0 30px;
  }
  .navBox span:hover{
    color: #3F8FDF;
  }
</style>
