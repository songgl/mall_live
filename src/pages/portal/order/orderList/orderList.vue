<template>
  <div>
          <div class="box mt-15">
       <div class="box_start ">
         <div class="f20">我的订单</div>
       </div> 
       <div class="mt-30">
         <div class="dd-nav">
        <a href="JavaScript:;"  class="act" >全部订单（0）</a>
        <a href="JavaScript:;"  class="">待付款（0）</a>
        <a href="JavaScript:;"  class="">待发货（0）</a>
        <a href="JavaScript:;"  class="">待收货（0）</a>
        <a href="JavaScript:;"  class="">待评价（0）</a>
        <a href="JavaScript:;"  class="">已完成（0）</a>
        <!-- <div class="btn"><input type="text"  placeholder="订单编号" class="">
          <i class="fa fa-search fa-lg"></i></div> -->
      </div>
       </div>
       <div class="ddlist-nav mt-60 mb-30">
        <ul>
          <li>商品名</li>
          <li>订单金额</li>
          <li>订单状态</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="ddlist-box">
        <div class="ddlist " >
          <div class="tit"><span >下单时间：2018-02-02 10:35:59</span><span >订单号：20180202103559490753899418</span><span >沃鎏波洱
            <a target="_blank" href="http://kefu.easemob.com/webim/im.html?tenantId=45997"><img src="@/assets/icon/lianxishangjia.png"></a></span></div>
          <div class="table">
            <table cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td class="td1" style="padding:30px 0px;">
                  <div class="dd-l-list clearfix " >
                    <ul>
                      <li class="img"><a target="_blank" href="#"><img src="../../../../assets/images/tu2@3x.png" ></a></li>
                      <li class="txt"><a target="_blank" href="" >Recombinant Human Histone Deacetylase 8/HDAC8 Protein</a></li>
                      <li class="num ">×1</li>
                      <li class="sqsh" >
                        <span class="blue" ><a href="#">申请退款</a></span>
                        <!-- <span class="blue" >等待审核</span> -->
                        <!-- <span class="blue" >退款成功</span> -->
                        <!-- <span class="blue" >退款申请已拒绝</span> -->
                      </li>
                    </ul>
                  </div>
                    <div class="dd-l-list clearfix " >
                    <ul>
                      <li class="img"><a target="_blank" href="#"><img src="../../../../assets/images/tu2@3x.png" ></a></li>
                      <li class="txt"><a target="_blank" href="" >Recombinant Human Histone Deacetylase 8/HDAC8 Protein</a></li>
                      <li class="num ">×1</li>
                      <li class="sqsh" >
                        <span class="blue" ><a href="#">申请退款</a></span>
                        <!-- <span class="blue" >等待审核</span> -->
                        <!-- <span class="blue" >退款成功</span> -->
                        <!-- <span class="blue" >退款申请已拒绝</span> -->
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="td2 red ">￥2827.50</td>
                <td class="td3"><span class="">待付款</span>
                  <a href="#">订单详情</a>
                </td>
                <td class="td4 " >
                  <span class="huise"></span><span class="btn" >立即付款</span>
                  <span class="del" >取消订单</span>
                </td>
              </tr>
            </tbody></table>
          </div>
        </div>
      </div>

       
       
    </div>
  </div>
</template>

<script>
import '@/assets/css/cuimeng_style.css'
export default {
  data () {
    return {

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
    background-color: #fff;
    padding: 30px;
  }

  dd-nav>a.act, .dd-nav>a:hover {
    border-bottom: 2px solid #3f8fdf;
    color: #3f8fdf;
}
.dd-nav>a {
    display: inline-block;
    border-bottom: 2px solid #fff;
    margin-right: 10px;
    line-height: 38px;
}
.dd-nav>div {
    float: right;
    display: inline-block;
    width: 200px;
    height: 40px;
    border: 1px solid #ebebeb;
    background: #f1f1f1;
    line-height: 38px;
}
.dd-nav>div input {
    border: 0px;
    padding-left: 7px;
    height: 38px;
    line-height: 38px;
    width: 140px;
    background: #f1f1f1;
    float: left;
}
input {
    outline: none;
    border-radius: 0px;
    font-family: tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    font-size: 14px;
}
.dd-nav>div i {
    width: 58px;
    border: 0px;
    height: 38px;
    text-align: center;
    color: #fff;
}
.ddlist-nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #f1f2f6;
}
.ddlist-nav ul li:nth-child(1) {
    width: 441px;
}
.ddlist-nav ul li {
    text-align: center;
    float: left;
    width: 145px;
}
.dd-l-list .sqsh{width:80px;text-align:center}
.ddlist {
    margin-bottom: 40px;
}
.ddlist>.tit {
    height: 36px;
    line-height: 36px;
    background: #fbfbfb;
}
.ddlist>.tit span {
    margin-left: 30px;
    font-size: 12px;
    color: #666;
}
.ddlist>.tit span img {
    width: 14px;
    height: 14px;
    margin-left: 5px;
}
.table table {
    border-collapse: collapse;
    width: 100%;
}
.ddlist-box tr {
    border: 1px solid #ebebeb;
}
.ddlist-box .td1 {
    width: 436px;
}
.ddlist-box td {
    border: 1px solid #ebebeb;
    padding: 30px 20px;
}
.ddlist-box .td2 {
    width: 145px;
}
.dd-l-list:last-child {
    margin-bottom: 0px!important;
}
.dd-l-list:first-child {
    border: none;
}
.dd-l-list {
    margin-bottom: 0px;
    border-top: 1px solid #ebebeb;
}
.dd-l-list .img {
    width: 80px;
    height: 80px;
    overflow: hidden;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.dd-l-list .img img {
    width: 80px;
}
.dd-l-list .txt {
    width: 190px;
    padding-left: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.dd-l-list .num {
    width: 40px;
    text-align: center;
}
.dd-l-list li {
    display: inline-block;
    float: left;
    line-height: 80px;
}
.red {
    color: #fd655a!important;
}
.blue{color:#2173c5!important};
.ddlist-box .td3 {
    width: 145px;
}
.ddlist-box td {
    border: 1px solid #ebebeb;
    padding: 30px 20px;
}
.ddlist-box .td3 span {
    color: #ff9e31;
}
.ddlist-box .td3 a {
    display: block;
}
.ddlist-box .td4 {
    position: relative;
}
.ddlist-box .td4 {
    width: 145px;
}
.ddlist-box .td4 span {
    margin-bottom: 8px;
    cursor: pointer;
    color: #999;
}
.ddlist-box .td4 .btn {
    display: block;
    padding: 3px 6px;
    border-radius: 5px;
    color: #3f8fdf;
    border: 1px solid #3f8fdf;
    text-align: center;
}
.ddlist-box .td4 span {
    margin-bottom: 8px;
    cursor: pointer;
    color: #999;
}
.ddlist-box .td4 .del {
    display: block;
    padding: 3px 6px;  
    text-align: center;
}
</style>
