// routes/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; // 正確引入 Home 組件
import LogIn from '@/components/LogIn.vue'; // 正確引入 LogIn 組件
import marquee from "@/components/marquee.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/Login', component: LogIn },
        { path: '/marquee', component: marquee },
    ],
});




export default router;
