import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import * as VueGoogleMaps from 'vue2-google-maps'

import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';
import Machine from './Machine.vue';
import MachineDetail from './MachineDetail.vue';
import CreateMachine from './CreateMachine.vue';

Vue.use(VueRouter);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAyOGVEWrpMADBqRhgT6FuvxUweYRmyjJ8',
    
  }
})


Vue.component('app-machine', Machine);


const routes = [
	{ path: '/list', component: MachinesList},
	{ path: '/map', component: MachinesMap},
	{ path: '/machine', component: Machine},
  { path: '/detail/:id', component: MachineDetail},
  { path: '/create', component: CreateMachine}
  
];

const router = new VueRouter({
	routes,

});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
