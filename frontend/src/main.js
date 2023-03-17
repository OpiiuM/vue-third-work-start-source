import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { clickOustide } from './common/directives';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive('click-outside', clickOustide);

app.mount('#app');
