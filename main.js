import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './uni.promisify.adaptor'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(Vuetify)
const app = new Vue({
  render: h => h(App)
})
app.$mount()
