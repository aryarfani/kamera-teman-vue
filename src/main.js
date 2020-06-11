import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import axios from "axios";
axios.defaults.baseURL = "https://api-kamera.000webhostapp.com/api";

Vue.config.productionTip = false;

// Import and use vue-toasted
import Toasted from "vue-toasted";
Vue.use(Toasted);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
