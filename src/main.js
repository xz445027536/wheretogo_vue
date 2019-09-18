import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入reset.css和iconfont.css
import './assets/style/reset.css'
import './assets/style/iconfont.css'
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入轮播图样式
import 'swiper/dist/css/swiper.css'
//使用轮播图插件
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
