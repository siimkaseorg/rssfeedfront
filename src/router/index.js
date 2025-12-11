import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import FeedSettingsView from "@/views/FeedSettingsView.vue";
import FeedView from "@/views/FeedView.vue";
import LaterReadView from "@/views/LaterReadView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ErrorView from "@/views/ErrorView.vue";


const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/login',
        name: 'loginRoute',
        component: LoginView
    },
    {
        path: '/read',
        name: 'readRoute',
        component: LaterReadView
    },
    {
        path: '/feed',
        name: 'feedRoute',
        component: FeedView
    },
    {
        path: '/feed/settings',
        name: 'feedSettingsRoute',
        component: FeedSettingsView
    },
    {
        path: '/signup',
        name: 'signupRoute',
        component: SignUpView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
