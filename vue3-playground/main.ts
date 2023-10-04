import { createApp } from 'vue'
import TemplateComponent from '../src/index'
import App from './App.vue'

import 'virtual:uno.css'

const app = createApp(App)
app.use(TemplateComponent)
app.mount('#app')
