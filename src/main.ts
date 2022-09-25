import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createI18n } from 'vue-i18n'
import { i18n } from './i18n'

import './assets/main.css'

// const i18n = createI18n({
//     locale: 'fr', // set locale
//     fallbackLocale: 'en', // set fallback locale
//     messages, // set locale messages
//     // If you need to specify other options, you can set other options
//     // ...
// })

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
