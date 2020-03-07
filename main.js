import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import index from './pages/index/index.vue'
import car from './pages/car/car.vue'
import user from './pages/user/user.vue'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.component('index',index)
Vue.component('car',car)
Vue.component('user',user)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
