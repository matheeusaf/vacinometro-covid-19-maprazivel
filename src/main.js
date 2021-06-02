import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'

Vue.config.productionTip = false
Vue.use(Donut)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
