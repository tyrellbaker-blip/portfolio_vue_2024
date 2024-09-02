// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResearchView from '../views/ResearchView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import VisionView from '../views/VisionView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/research',
        name: 'Research',
        component: ResearchView
    },
    {
        path: '/experience',
        name: 'Experience',
        component: ExperienceView
    },
    {
        path: '/vision',
        name: 'Vision',
        component: VisionView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router