import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import './assets/common.css'


// [axios / http 통신]
// app.config.globalProperties.$axios = axios; 
// app.config.globalProperties.axios = axios;
// app.config.globalProperties.foo = 'bar';

// createApp(App).use(router).mount('#app')
// [앱 생성 실시]
const app = createApp(App)
// [axios / http 통신]
app.config.globalProperties.$axios = axios
app.config.globalProperties.$serverUrl = '//localhost:9999' //api server
// [라우터 사용 설정]
app.use(router)
// [main 아이디 : 렌더링 시작점]
app.mount('#app')


// CORS 설정(모든 리소스 허용)
// const AxiosInst = axios.create({
//     baseURL : 'http://localhost:9999'
// })
// AxiosInst.interceptors.request.use(
//     (config) => {
//         config.headers.authorization = 'token';
//         config.headers['Access-Control-Allow-Origin'] = '*';  // CORS 설정(모든 리소스 허용)
//         return config;
//     }
// )
// export default AxiosInst;