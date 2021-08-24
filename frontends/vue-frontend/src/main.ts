import './assets/css/tailwind.css';

import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;

declare global {
	interface Window {
		colState?: Record<string, unknown>;
	}
}

new Vue({
	render: (h) => h(App)
}).$mount('#app');
