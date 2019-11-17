import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
// @ts-ignore
import VueSocketIO from 'vue-socket.io';
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:3000';

/* GLOBAL STYLES  */
import './assets/scss/_variables.scss';
import './assets/scss/common.scss';



Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000/',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
