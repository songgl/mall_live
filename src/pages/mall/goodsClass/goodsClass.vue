<template>
  <div class="pageBox">
    <my-nav @one-level='_oneLevel' @two-level="_twoLevel" :type="2"></my-nav>
    <div class="container">
      <div class="guideBox">
        <router-link to="/">首页</router-link>> 
        <span v-text="oneLevelName"></span>
      </div>
      <div class="twoLevelBox clearfix">
        <div class="twoTitle">分类:</div>
        <div class="twoLevelItemBox clearfix">
          <div class="item" :class="{twoLevelAct: class_uuid == item.class_uuid}" v-for="item in twoLevel" @click="twoLevelClick(item.class_uuid)" v-text="item.class_name"></div>
        </div>
      </div>
      <sort :current-page="currentPage" :all-page="allPage" @on-page="onPage" @on-sort="onSort"></sort>
      <div class="goodsListBox clearfix">
        <box-left></box-left>
        <div class="box-right">
          <div class="clearfix">
            <div class="goodsItemBox">
              <goods-item :goods-info='item' v-for="item in goodsList" :key="item.goods_id"></goods-item>
            </div>
          </div>
          <div class="paginaction" v-show="allPage > 1">
            <el-pagination
              :prev-text="'上一页'"
              :next-text="'下一页'"
              background
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="4"
              layout="total,prev, pager, next, jumper"
              :page-count="allPage">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from 'element-ui'
import storage from '@/common/storage'
import api from '@/api/goods'
import GoodsItem from '@/components/goodsItem/goodsItem'
import myNav from '../private/nav'
import sort from './private/sort'
import boxLeft from './private/boxLeft'

export default {
  data () {
    return {
      twoLevel: {},
      class_uuid: null,
      oneLevelName: storage.s_getItem('levelObj').paName,
      goodsList: [],
      currentPage: 1, // 当前页
      allPage: 1, // 总页数
      sortType: 1, // 排序类型默认为1(综合)
    }
  },
  methods: {
    // 获取二级分类
    _getTwoLevel (paUuid,twoUuid) {
      api.getTwoLevel({
        class_uuid: paUuid
      }).then((res) => {
        if(res.status === 'ok'){
          this.twoLevel = res.data
          if(!twoUuid){
            this._getGoodsList(res.data[0].class_uuid)
          }else {
            this._getGoodsList(twoUuid)
          }
        }else if(res.status === 'error'){
          console.log(res.data)
        }
      })
    },

    // 获取商品列表
    _getGoodsList (class_uuid,type,p) {
      this.goodsList = []
      this.class_uuid = class_uuid
      this.currentPage = p || 1
      this.sortType = type || 1
      api.getGoodsList({
        class_uuid : this.class_uuid,
        type : this.sortType,
        p : this.currentPage,
        pagesize: 4
      }).then(res => {
        if(res.status === 'ok'){
          this.allPage = res.data.page
          for(let i=0; i<res.data.goodsBean.length; i++){
            this.goodsList.push(res.data.goodsBean[i])
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },

    // 切换排序类型
    onSort (type) {
      this._getGoodsList(this.class_uuid,type)
    },
    //onPage
    onPage (count) {
      this.currentPage = count
    },

    // 二级分类点击事件
    twoLevelClick (class_uuid) {
      this._getGoodsList(class_uuid)
    },
    // nav组件一级分类点击事件
    _oneLevel (item) {
      this.oneLevelName = item.class_name
      this._getTwoLevel(item.class_uuid)
    },
    // nav组件二级分类点击事件
    _twoLevel (paItem,item){
      this.oneLevelName = paItem.class_name
      this._getTwoLevel(paItem.class_uuid, item.class_uuid)
    },
    
    // 页数改变事件
    handleCurrentChange (val) {
      this._getGoodsList(this.class_uuid, this.sortType, val)
    }
  },
  created () {
    this.oneLevelName = storage.s_getItem('levelObj').paName
    this._getTwoLevel(storage.s_getItem('levelObj').PaUuid,storage.s_getItem('levelObj').class_uuid)
    this.setGoodsNav(true)
  },
  components: {
    myNav,
    GoodsItem,
    sort,
    ElPagination: Pagination,
    boxLeft
  }
}
</script>

<style scoped>
  .classPage{
    min-height: 600px;
  }
  .guideBox{
    height: 50px;
    line-height: 50px;
  }
  .guideBox a:hover{
    color: red;
  }
  .twoLevelBox{
    background-color: #fff;
    padding: 20px 20px 0 20px;
  }
  .twoTitle{
    float: left;
    font-size: 16px;
  }
  .twoLevelItemBox{
    float: left;
    font-size: 14px;
    width: 95%;
  }
  .item{
    float: left;
    padding: 0 30px 20px 30px;
    cursor: pointer;
  }
  .item:hover, .twoLevelAct{
    color: red;
  }
  .goodsListBox{
    margin: 20px 0;
  }
  .box-right{
    float: right;
    width: 960px;
  }
  .goodsItemBox{
    width: 25%;
    padding-left: 20px;
    height: 350px;
    float: left;
    margin-bottom: 20px;
  }
  .paginaction{
    margin: 10px auto 0;
    width: 80%;
  }
</style>
