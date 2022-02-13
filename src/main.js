import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store/store'
import axios from 'axios'
 
axios.defaults.baseURL = 'http://127.0.0.1:8000'
// axios.defaults.headers.get['header-name'] = 'value'

const app = createApp(App)
app.use(router)
app.use(store)
app.mixin({
    methods : {
        forceUpdatenow(){
            this.$forceUpdate()
        },
    }
  })
app.mount('#app')
 
 

// position: absolute; top: 22%; left: 7%; -ms-transform: translateY(-50%); transform: translateY(-50%);
