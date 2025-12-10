import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import NewsView from "@/views/NewsView.vue";
import FeedView from "@/views/FeedView.vue";
import ReadView from "@/views/ReadView.vue";
import SignUpView from "@/views/SignUpView.vue";


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
        path: '/news',
        name: 'newsRoute',
        component: NewsView
    },
    {
        path: '/read',
        name: 'readRoute',
        component: ReadView
    },
    {
        path: '/feed',
        name: 'feedRoute',
        component: FeedView
    },
    {
        path: '/signup',
        name: 'signupRoute',
        component: SignUpView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
