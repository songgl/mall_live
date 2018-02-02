<template>
  <div>
    <div class="wdddbox">
       <div class="shdz-box bg_fff">
         <div class="tit f_co_999"><span class="cursor" >新增收货地址</span>你已经创建1个收货地址，最多可创建6个</div>
         <div class="shdz-list " >
            <span class="cursor">×</span>
            <ul>
              <li ><label>收货人：</label>sd</li>
              <li ><label style="float: left;">详细地址：</label>北京市北京市东城区sdf</li>
              <li ><label>手机号：</label>13122312974</li>
              <li ><label>邮编：</label>100100<a href="javascript:;" >编辑</a><a href="javascript:;" class="act">默认地址</a></li>
            </ul>
         </div>
       </div>
     </div>

  </div>
</template>

<script>
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
  .wdddbox {
    padding: 0px 30px;
    background: #fff;
    padding-bottom: 50px;
    margin-top: -20px;
}
.shdz-box {
    padding: 60px 30px 60px 60px;
}
.shdz-box>.tit span {
    padding: 10px 10px;
    font-size: 18px;
    color: #fff;
    background: #3f8fdf;
    margin-right: 20px;
    border-radius: 10px;
    cursor: default;
}
.shdz-list {
    border: 1px solid #ebebeb;
    padding: 40px 60px 20px 30px;
    margin-top: 60px;
    position: relative;
}
.shdz-list>span {
    float: right;
    font-size: 30px;
    color: #999;
    display: block;
    position: absolute;
    right: 0px;
    top: 0px;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: default;
}
.shdz-list li {
    margin-bottom: 20px;
}
.shdz-list label {
    color: #999;
}
.shdz-list a {
    float: right;
    color: #3f8fdf;
    margin-left: 20px;
}
.shdz-list a.act {
    background: #fd655a;
    color: #fff;
    padding: 2px 10px;
}
</style>
