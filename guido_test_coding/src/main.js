import Vue from 'vue'
import App from './App.vue'

import store from './store'

// https://router.vuejs.org
import router from './router/index'

// https://axios-http.com
import axios from 'axios'
import VueAxios from 'vue-axios'

// https://getbootstrap.com
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// https://fontawesome.com
import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/fontawesome"

// Custom CSS
import "./assets/css/style-custom.css"

// Importar Google Maps
import * as VueGoogleMaps from "vue2-google-maps" 

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAng9kRXOxiuZjiZLbmROQC0eZyBHhTTlw",
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')