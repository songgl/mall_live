<template>
  <div class="sortBox clearfix">
    <div class="sortBtnBox clearfix">
      <span class="item" :class="{ itemAct: type==1 }" @click="itemClick(1)">综合排序</span>
      <span class="item" :class="{ itemAct: type==2 }" @click="itemClick(2)">销量从高到低</span>
      <span class="item" :class="{ itemAct: type==5 }" @click="itemClick(5)">销量从低到高</span>
      <span class="item" :class="{ itemAct: type==3 }" @click="itemClick(3)">价格从高到低</span>
      <span class="item" :class="{ itemAct: type==4 }" @click="itemClick(4)">价格从低到高</span>
    </div>
    <div class="paging">
      <div class="pageBtn" @click="pageClick(1)"> < </div>
      <div class="pageCount"><em class="current" v-text="currentPage"></em>/<em v-text="allPage"></em></div>
      <div class="pageBtn" @click="pageClick(2)"> > </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentPage','allPage'],
  data () {
    return {
      type: 1,
      pageCount: this.currentPage,
      allCount: this.allPage
    }
  },
  methods: {
    itemClick (type) {
      this.type = type
      this.$emit('on-sort', type)
    },
    pageClick (type) {
      if(type == 1 && this.pageCount > 1){
        this.pageCount = this.pageCount -1
      }else if(type == 2 && this.pageCount < this.allCount){
        this.pageCount = this.pageCount + 1
      }
      this.$emit('on-page', this.pageCount)
    }
  }
}
</script>

<style scoped>
  .sortBox{
    line-height: 40px;
    height: 40px;
    border: 1px solid #e5e5e5;
    margin-top: 20px;
  }
  .sortBtnBox{
    float: left;
  }
  .item{
    float: left;
    border-right: 1px solid #e5e5e5;
    padding: 0 15px;
    cursor: pointer;
    height: 38px;
  }
  .itemAct{
    background-color: #fff;
    color: red;
  }
  .item:hover{
    background-color: #fff;
    color: red;
  }
  .paging{
    float: right;
    background-color: #fff;
  }
  .pageBtn{
    width: 30px;
    height: 38px;
    float: left;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
  .pageBtn:hover, .current{
    color: red;
  }
  .pageCount{
    width: 50px;
    height: 38px;
    float: left;
    text-align: center;
    font-size: 14px;
  }
</style>
