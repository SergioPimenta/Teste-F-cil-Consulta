import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../bootstrap-5.2.0-beta1-dist/css/bootstrap.min.css"
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.use(VueTheMask)

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
