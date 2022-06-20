import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css';

import Antd from './plugin/antd';
import router from './router'
import App from './App.vue'

const app = createApp(App);
app.use(router)
app.use(Antd)

app.mount('#app');
