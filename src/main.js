import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
require("@/assets/tailwind.css");

Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
  axios
}).$mount('#app')
