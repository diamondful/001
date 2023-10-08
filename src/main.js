import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from "axios";
import App from './App.vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引用插件
//引入路由器
import router from './router'
Vue.config.productionTip = false
//应用插件
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(ElementUI)
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
