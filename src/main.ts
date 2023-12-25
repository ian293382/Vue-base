import { createApp } from 'vue'
import App from './App.vue'
import router from '../routes/index.js'; // 修正引入路由的路徑

createApp(App)
  .use(router)
  .mount('#app');