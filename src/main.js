import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// createApp(App).use(router).mount('#app')

// [앱 생성 실시]
const app = createApp(App);

// [라우터 사용 설정]
app.use(router);

// [axios / http 통신]
app.config.globalProperties.$axios = axios; 

// [main 아이디 : 렌더링 시작점] 
app.mount('#app');


