import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'

import Mall from '@/pages/mall/mall'
import Home from '@/pages/mall/home/home'
import GoodsClass from '@/pages/mall/goodsClass/goodsClass'
import ShopDetails from '@/pages/mall/shopDetails/shopDetails'
import GoodsDetails from '@/pages/mall/goodsDetails/goodsDetails'
import ConfirmOrder from '@/pages/mall/confirmOrder/confirmOrder'
import OrderPay from '@/pages/mall/orderPay/orderPay'

import ShoppingCar from '@/pages/mall/shoppingCar/shoppingCar'

import Portal from '@/pages/portal/portal'
import MeDetails from '@/pages/portal/meDetails/meDetails'
import EditUser from '@/pages/portal/editUser/editUser'

import OrderList from '@/pages/portal/order/orderList/orderList'
import RefundOrder from '@/pages/portal/order/refundOrder/refundOrder'
import EvaluateList from '@/pages/portal/order/evaluateList/evaluateList'

import GoodsCollection from '@/pages/portal/collection/goodsCollection/goodsCollection'
import MyFollow from '@/pages/portal/collection/myFollow/myFollow'

import MyAddress from '@/pages/portal/myAddress/myAddress'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: "/mall/home", // 重定向
      component: Mall
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/mall',
      name: 'mall',
      redirect: "/mall/home", // 重定向
      component: Mall,
      children: [
        {
          path: 'home', // 首页
          name: 'home',
          component: Home
        },{
          path: 'goodsClass', // 商品分类页
          name: 'goodsClass',
          component: GoodsClass,
          props: true
        },{
          path: 'goodsDetails', // 商品详情页
          name: 'goodsDetails',
          component: GoodsDetails
        },{
          path: 'shopDetails', // 店铺详情
          name: 'shopDetails',
          component: ShopDetails
        }
      ]
    },{
      path: '/confirmOrder', // 确认订单页
      name: 'confirmOrder',
      component: ConfirmOrder
    },{
      path: '/orderPay', // 订单支付页
      name: 'orderPay',
      component: OrderPay
    },{
      path: '/shoppingCar', // 购物车
      name: 'shoppingCar',
      component: ShoppingCar
    },{
      path: '/portal',
      name: 'portal',
      redirect: "/portal/meDetails", // 重定向
      component: Portal,
      children: [
        {
          path: 'meDetails', // 
          name: 'meDetails',
          component: MeDetails
        },{
          path: 'editUser', // 账户设置
          name: 'editUser',
          component: EditUser
        },{
          path: 'orderList', // 订单列表
          name: 'orderLisr',
          component: OrderList
        },{
          path: 'refundOrder', // 退款订单
          name: 'refundOrder',
          component: RefundOrder
        },{
          path: 'evaluateList', // 评价晒单
          name: 'evaluateList',
          component: EvaluateList
        },{
          path: 'goodsCollection', // 商品收藏
          name: 'goodsCollection',
          component: GoodsCollection
        },{
          path: 'myFollow', // 我的关注
          name: 'myFollow',
          component: MyFollow
        },{
          path: 'myAddress', // 我的地址
          name: 'myAddress',
          component: MyAddress
        }
      ]
    }
  ]
})
