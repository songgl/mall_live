<template>
  <div>
          <div class="box">
       <div class="box_start ">
         <div class="f20">我的订单</div>
       </div> 
       <div class="mt-30">
         <div class="dd-nav">
        <a href="JavaScript:;"  class="act" >全部售后订单（0）</a>
        <a href="JavaScript:;"  class="">申请已提交（0）</a>
        <a href="JavaScript:;"  class="">商家审核通过（0）</a>
        <a href="JavaScript:;"  class="">审核不通过（0）</a>
        <a href="JavaScript:;"  class="">退款成功（0）</a>
       <!--  <div class="btn"><input type="text"  placeholder="退款编号" class="">
          <i class="fa fa-search fa-lg"></i></div> -->
      </div>
       </div>
       <div class="ddlist-nav2 mt-60 mb-30">
        <ul>
          <li>退款编号</li>
          <li>商品</li>
          <li>商家</li>
          <li>订单金额</li>
          <li>退款金额</li>
          <li>退款状态</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="ddlist-box">
        <div class="w100 ddlist-ref ">
          <ul>
          <li>123123123123</li>
          <li>商品名字</li>
          <li>北京同仁堂</li>
          <li>&yen;<span>112</span></li>
          <li>&yen;<span>112</span></li>
          <li>申请已提交</li>
          <li>查看</li>
        </ul>
        </div>
        <div class="w100 ddlist-ref ">
          <ul>
          <li>123123123123</li>
          <li>商品名字</li>
          <li>北京同仁堂</li>
          <li>&yen;<span>112</span></li>
          <li>&yen;<span>112</span></li>
          <li>申请已提交</li>
          <li>查看</li>
        </ul>
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
.ddlist-nav2 {
    height: 50px;
    line-height: 50px;
    background: #f1f2f6;
}
.ddlist-nav2 ul li:nth-child(1) {
    width: 180px;
}.ddlist-nav2 ul li:nth-child(2) {
    width: 196px;
}.ddlist-nav2 ul li:nth-child(3) {
    width: 140px;
}.ddlist-nav2 ul li:nth-child(4) {
    width: 90px;
}.ddlist-nav2 ul li:nth-child(5) {
    width: 90px;
}.ddlist-nav2 ul li:nth-child(6) {
    width: 90px;
}.ddlist-nav2 ul li:nth-child(7) {
    width: 90px;
}
.ddlist-nav2 ul li {
    text-align: center;
    float: left;
}
.ddlist-ref{
  height: 130px;
  padding-top: 40px;
  padding-bottom: 40px;
  /*background: #f1f2f6;*/
  border-bottom: 1px solid #ebebeb;
  position: relative;
}
.ddlist-ref:last-child{
  border:none;
}
.ddlist-ref ul{}
.ddlist-ref ul li:nth-child(1) {
    width: 180px;
}.ddlist-ref ul li:nth-child(2) {
    width: 196px;
}.ddlist-ref ul li:nth-child(3) {
    width: 140px;
    color: #999;
}.ddlist-ref ul li:nth-child(4) {
    width: 90px; 
       color: #999;
}.ddlist-ref ul li:nth-child(5) {
    width: 90px;
        color: #999;
}.ddlist-ref ul li:nth-child(6) {
    width: 90px;
        color: #ff9e31;
}.ddlist-ref ul li:nth-child(7) {
    width: 90px;
    color: #2173c5;
}
.ddlist-ref ul li {
    text-align: center;
    line-height: 50px;
    float: left;
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

</style>
