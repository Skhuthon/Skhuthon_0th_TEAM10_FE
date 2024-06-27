import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/Pretendard.css'; // Pretendard 폰트 CSS 파일을 import

const app = createApp(App)

app.use(router).mount('#app')
