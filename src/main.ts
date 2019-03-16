import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './styles/styles.scss';
import {RouteNames} from '@/router/RouteNames';

Vue.config.productionTip = false;

Vue.prototype.$routeNames = RouteNames;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
