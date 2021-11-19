import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Peliculas from './components/Peliculas/Peliculas.vue';
import ModificarPeliculas from './components/Peliculas/ModificarPelicula.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/genero/:idGen', component: Peliculas },
  { path: '/nac/:idNac', component: Peliculas },
  { path: '/modificar', component: ModificarPeliculas },
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')