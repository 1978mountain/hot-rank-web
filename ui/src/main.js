import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/themes.css'
import localStorageUtils from './utils/localStorageUtils'
const isDarkMode = localStorage.getItem('isDarkMode') !== 'false';
document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$localStorage = localStorageUtils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
