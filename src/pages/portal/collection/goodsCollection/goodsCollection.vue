<template>
  <div class="wallbox">
 
    <div class="box ">
      <div class="box_start h-50 bg_fff">
         <div class="f20 pl-10">商品收藏</div>
       </div> 
      <div class="w100 h-360 mt-20">
         <!-- <sort :current-page="currentPage" :all-page="allPage" @on-page="onPage" ></sort> -->
        <div class="w100 clearfix">

            <div class="goodsItemBox" v-for="item in UserGoodsCollection" :key="item.goods_id">
              <goods-item :goods-info='item'></goods-item>
            </div>
          </div>
          <div class="paginaction" v-show="allPage >= 1">
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
import '@/assets/css/cuimeng_style.css'
import api from '@/api/api'
import me from '@/api/me'
import storage from '@/common/storage'
// import sort from './private/sort'
import GoodsItem from '@/components/goodsItem/goodsItem'

export default {
  data () {
    return {
      userInfo: {},
      userphonestar:'',
      UserGoodsCollection: [],
      currentPage: 1, // 当前页
      allPage: 1 ,// 总页数
      sortType: 1 // 排序类型默认为1(综合)
    }
  },
  methods: {
    // 获取用户信息
    _getUserInfo () {
      api.getUserInfo({
        uid: this.getCookie('uid'),
        token: this.getCookie('token')
      }).then((res) => {
        console.log(res)
        if(res.status === 'ok'){
          this.userInfo = res.data
          this._rechangeUserphone(res.data.phone)
          this.setCookie('userInfo', res.data)
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data
          })
        }
      })
    },
    // 获取收藏商品信息
    _getUserGoodsCollection (p) {
      this.UserGoodsCollection = []
      this.currentPage = p || 1
      me.getUserGoodsCollection({
        p : this.currentPage,
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        pagesize:4
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.allPage = res.data.page
          for(let i=0; i<res.data.list.length; i++){
            this.UserGoodsCollection.push(res.data.list[i])
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
    // onSort (type) {
    //   this._getUserGoodsCollection(type)
    // },
     //onPage
    onPage (count) {
      this.currentPage = count
    },
     // 页数改变事件
    handleCurrentChange (val) {
      this._getUserGoodsCollection(val)
    },
    // 用户手机号加*
    _rechangeUserphone (phone) {
         this.userphonestar = phone.substring(0,3)+ "****" + phone.substring(7,11); 
    }
  },
  created () {
    this._getUserInfo();
    this._getUserGoodsCollection(1);
   
  },
  components: {
   GoodsItem,
   // sort,
   ElPagination: Pagination
  }
}
</script>

<style scoped>
 
  .wallbox{

  }
  .box{
    /*background-color: #fff;*/
    padding: 0 30px 30px 30px;
  }

  
  .grzl-ddnav {
  
  }
  .grzl-ddnav>div {
    width: 50%;
    float: left;
    margin-bottom: 40px;
}
.grzl-ddnav>div p {
    width: 100px;
    height: 100px;
    overflow: hidden;
    float: left;
}
.grzl-ddnav>div p img {
    width: 100%;
}
.grzl-ddnav>div ul {
    padding: 29px 0px;
    padding-left: 130px;
}
.grzl-ddnav>div ul li:first-child {
    font-size: 18px;
}
.grzl-ddnav>div ul li span {
    color: #fd655a;
    font-size: 18px;
}
.grzl-ddnav>div ul li a {
    color: #999;
}
.grzl-ddnav>div:first-child ul li a  {
    color: #ff6350;
}
.orderlist_item:last-child {
  border-bottom: none;
}
.goodsItemBox{
    width: 23%;
    /*padding-left: 20px;*/
    height: 350px;
    float: left;
    margin-bottom: 20px;
    margin-right: 2.6%;
  }
  .goodsItemBox:nth-of-type(4n){margin-right: 0; }

  .paginaction{
    margin: 10px auto 0;
    width: 80%;
  }
/*商品样式*/
.itemContent{
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    padding: 10px;
  }
  .itemContent:hover{
    box-shadow: 1px 1px 7px #999;
  }
  .goodsImg{
    height: 200px;
  }
  .priceBox{
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
  }
  .now_price{
    color: red;
    margin-right: 10px;
    font-size: 16px;
  }
  .origin_price{
    color: #999;
    text-decoration:line-through;
    font-size: 14px;
  }
  .goodsName{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    height: 38px;
    min-height: 38px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .salesEvalu{
    height: 20px;
    line-height: 20px;
  }
  .salesEvalu span{
    color: #999;
    font-size: 14px;
    margin-right: 10px;
  }
  .salesEvalu em{
    color: #145596;
  }
</style>
