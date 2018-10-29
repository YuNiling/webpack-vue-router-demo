import Vue from 'vue';
import ElementUI from 'element-ui';
import vueBeauty from 'vue-beauty';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-beauty/package/style/vue-beauty.min.css';
import VueRouter from 'vue-router';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.vue';
import router from './router.js';

Vue.use(vueBeauty);
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

//让js模块能够热更新
if(module.hot){
    module.hot.accept();
}