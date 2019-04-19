import Vue from 'vue'
import App from './App'
import routers from '@/router'
import ElementUI from 'element-ui'
import hljs from 'highlight.js'
import VueRouter from 'vue-router'
import services from './service'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import './assets/style/index.scss'
import demoBlock from './components/demo-block/index.vue'

Vue.config.transpileDependencies = [
  '@seemmo/map'
]
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  ...routers
});
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('demo-block', demoBlock);
Vue.prototype._services = services


router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
