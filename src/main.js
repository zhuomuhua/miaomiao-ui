import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios

import * as filters from './filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import Loading_one from './components/loading/index_one'
import Loading_two from './components/loading/index_two'
Vue.component('Loading_one', Loading_one)
Vue.component('Loading_two', Loading_two)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')