import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt';


const emitter = mitt();
const app = createApp(App);


createApp(App).use(router).mount('#app')
app.config.globalProperties.emitter = emitter;