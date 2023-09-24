import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(Vuetify)
const app = new Vue({
  vuetify:new Vuetify,
  render: h => h(App)
})
app.$mount()
