import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import PracticeComponent from '../components/PracticeComponent.vue'

const routers = [
    {
        path: '/',
        name: 'PracticeComponent',
        component: PracticeComponent
    },
    {
        path:'/first-compontent',
        name:'FistCompontent',
        component: ()=> import('../components/FistCompontent.vue') 
    }
];

const router = new VueRouter({
    routes: routers
})

export default router;