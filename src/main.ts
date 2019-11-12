import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

/* GLOBAL STYLES  */
import './assets/scss/_variables.scss';
import './assets/scss/common.scss';

Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
