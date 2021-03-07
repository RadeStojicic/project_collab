import Vue from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero/Hero.vue'


Vue.config.productionTip = false
Vue.use( VueSplide )
Vue.component('app-navbar', Navbar)
Vue.component('app-hero', Hero)

new Vue({
  render: h => h(App),
}).$mount('#app')
