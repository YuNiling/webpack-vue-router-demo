import VueRouter from 'vue-router';

//定义（路由）组件
import App from './App.vue';
import HomePg from './components/HomePg.vue';

//定义路由
//创建router实例
const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: App
        },
        {
            path: '/home',
            component: HomePg
        }
    ]
});

export default router;
