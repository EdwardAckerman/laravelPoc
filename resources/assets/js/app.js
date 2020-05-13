window.Vue = require('vue');

import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-br';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element, { locale });

import App from '../../views/layout/App';

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
