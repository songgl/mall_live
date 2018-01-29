// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import util from './common/util'
import storage from './common/storage'
import api from './api/api'
import Navigation from 'vue-navigation'

Vue.use(Navigation, {router})

Vue.config.productionTip = false

// 公用操作方法插件
Vue.use(util);

// 跳转到登录页
Vue.prototype.goLogin = () => {
  storage.s_clear() // 清空所有sessionStorage
  storage.s_setItem('beforeLoginUrl', router.history.current.fullPath) // 保存用户进入的url
  router.push('/login')
  return false
}

// 路由勾子
router.beforeEach((to, from, next) => {
	if(to.path != '/mall/home' && to.path != '/login' && to.path !='/mall/goodsDetails' && to.path != '/mall/goodsClass' && !Vue.prototype.getCookie('uid') && !Vue.prototype.getCookie('token')){
		storage.s_setItem('beforeLoginUrl',to.fullPath)
	  next({ path: '/login' })
	  return false
	}else {
		next()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
