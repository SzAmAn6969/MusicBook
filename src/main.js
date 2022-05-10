import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
// .component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(store).use(router).mount('#app')


