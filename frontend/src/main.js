import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { clickOustide } from './common/directives';
import { getToken, removeToken } from '@/services/token-manager';
import { useAuthStore } from '@/stores';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive('click-outside', clickOustide);

app.mount('#app');

const token = getToken();

if (token) {
	try {
		const authStore = useAuthStore();
		await authStore.getMe();
		await router.push('/');
	} catch (e) {
		removeToken();
		console.error(e);
	}
}
