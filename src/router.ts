import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteParams, RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import Work from './pages/Work.vue'
import NotFound from './pages/NotFound.vue'
import {gsap} from "gsap";

export type AppRouteNames =
    | 'home'
    | 'work-item'
    | 'test'

export const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'work-item',
        path: '/work/:slug',
        component: Work,
    },
    {
        name: 'not-found',
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function routerPush(name: AppRouteNames, refName?: String, params?: RouteParams): ReturnType<typeof router.push>  {
    let newRoute;
    if (params !== undefined) {
        newRoute = router.push({
            name,
            params,
        })
    } else {
        newRoute = router.push({ name })
    }
    if (name === 'home') {
        newRoute.then(() => {
            let top = document.querySelector('#section-' + refName).offsetTop - window.screen.height / 12
            gsap.to(window, {duration: .6, scrollTo: top})
        })
        return
    }
    newRoute.then(() => { scrollTo(0, 0)})
}

