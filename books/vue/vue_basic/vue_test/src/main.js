import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 将App组件放入容器中
  // render: h => h(App),
  render: h => h(App),
  // template: `
  //   <App></App>
  // `,
  // template: `<h2>hello</h2>`
  // components:{
  //   App
  // },
})
