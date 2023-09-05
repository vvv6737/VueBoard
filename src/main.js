import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import './assets/common.css'
import store from './vuex/store'

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
app.config.globalProperties.$store = store

app
    .use(router)
    .use(store)
    .mount('#app')

