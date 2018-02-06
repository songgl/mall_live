<template>
  <div class="wallbox">
 
    <div class="box ">
      <div class="box_start h-50 bg_fff">
         <div class="f20 pl-10">我的关注</div>
       </div> 
      <div class="w100 h-360 mt-20">
        <div class="w100 clearfix">
          <div class="goodsItemBox" v-for="item in UserMerchantsCollection">
              <div class="itemContent">
                <router-link :to="{path: '/mall/shopDetails',query: {merchants_id:item.merchants_id}}" class="goodsImg">
                   <img v-bind:src="item.merchants_img" alt="">
                </router-link>
              <div class="f_co_999 mt-10">店铺名：<span class="f_co_000" v-text="item.merchants_name"></span> </div>
              <!-- <div class="f_co_999 mt-10">店铺综合评分：<span class="f_co_D7474C">10.00</span> </div> -->
              <div class="f_co_999 box_start mt-10"><span >店铺简介：</span><span class="grid_cell f_co_000 txwy" v-text="item.merchants_content"></span> </div>
              <div class="salesEvalu mt-20">
                <span>月销量:<em v-text="item.month_sales"></em></span>
                <!-- <span>共:<em v-text=" 2000"></em>件商品</span> -->
              </div>
              <div class="w100 box_arou mt-20" >
                <div class="f_co_fff box_center cursor bg_red w-70 h-26 borau-10" v-on:click="_cancelCollect(item.follow_id)">取消收藏</div>
                <a  target="_blank" href="http://kefu.easemob.com/webim/im.html?tenantId=45997" class="f_co_fff box_center bg_red w-70 h-26 borau-10">联系客服</a>
              </div>
          </div>
        </div>
     
       
       </div>
        <div class="paginaction" v-show="allPage >= 1">
            <el-pagination
              :prev-text="'上一页'"
              :next-text="'下一页'"
              background
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="3"
              layout="total,prev, pager, next, jumper"
              :page-count="allPage">
            </el-pagination>
          </div>    
      </div>
      
    </div>

  </div>
  
</template>

<script>
import { Pagination } from 'element-ui'
import '@/assets/css/cuimeng_style.css'
import me from '@/api/me'
import storage from '@/common/storage'
export default {
  data () {
    return {
      UserMerchantsCollection: [],
      currentPage: 1, // 当前页
      allPage: 1 ,// 总页数
      sortType: 1 // 排序类型默认为1(综合)
    }
  },
  methods: {
   // 获取收藏店铺信息
    _getUserMerchantsCollection (p) {
      this.UserMerchantsCollection = []
      this.currentPage = p || 1
      me.getUserMerchantsCollection({
        p : this.currentPage,
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        pagesize:3
      }).then(res => {
        console.log(res)
        if(res.status === 'ok'){
          this.allPage = res.data.page
          for(let i=0; i<res.data.list.length; i++){
            this.UserMerchantsCollection.push(res.data.list[i])
          }
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
    // 取消收藏
    _cancelCollect (folid) {
      me.cancelCollect({
        uid: this.getCookie('uid'),
        token: this.getCookie('token'),
        follow_id : folid
      }).then(res => {    
      if(res.status === 'ok'){     
        this.promptFun({
            content: res.data,
            type: 'true'
          })
        this._getUserMerchantsCollection();
        }else if(res.status === 'error'){
          this.promptFun({
            content: res.data,
            type: 'error'
          })
        }
      })
    },
  onPage (count) {
      this.currentPage = count
    },
     // 页数改变事件
    handleCurrentChange (val) {
      this._getUserMerchantsCollection(val)
    },
  },
  created () {
      this._getUserMerchantsCollection(1);
  },
  components: {
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
    width: 32%;
    /*padding-left: 20px;*/
    height: 350px;
    float: left;
    margin-bottom: 20px;
    margin-right: 2%;
  }
  .goodsItemBox:nth-of-type(3n){margin-right: 0; }
/*商品样式*/
.itemContent{
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    padding: 10px;
  }
  /*.itemContent:hover{
    box-shadow: 1px 1px 7px #999;
  }*/
  .itemContent img{
    height: 150px;
  }
  .goodsImg{
    height: 150px;
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
  .txwy{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
</style>
