import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Game from '@/views/Game.vue';
import History from '@/views/History.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/game',
        name: 'game',
        component: Game
    },
    {
        path: '/history',
        name: 'history',
        component: History
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
