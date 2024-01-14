import {createApp} from 'vue'
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import {createRouter, createWebHistory} from "vue-router";
import './style.css'
import App from './App.vue'
import home from "./pages/home/home.vue";
import favorites from "./pages/favorites/favorites.vue";
import profile from "./pages/profile/profile.vue";


const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/favorites', name: 'favorites', component: favorites},
    {path: '/profile', name: 'profile', component: profile},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(autoAnimatePlugin).use(router).mount('#app');
