import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/base/iconfont/iconfont.css'
import './assets/base/border.css'
import './assets/base/reset.css'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AMap from 'vue-amap'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '1d1f79ae4bc33f3215ecabdc975d6fd8',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation']
})
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
