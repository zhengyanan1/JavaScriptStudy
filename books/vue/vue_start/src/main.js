// import vue
import Vue from 'vue';
// import App
import App from "./App.vue"
// close Vue production Tip
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})