import { createRouter, createWebHistory } from "vue-router";
import hamburguesas from "../components/fatherHamComponent.vue";
import postres from "../components/fatherPostreComponent.vue";
import snacks from "../components/fatherSnaComponent.vue"

const routes = [
    {path: '/hamburguesas', name:'hamburguesas', component: hamburguesas},
    {path: '/postres', name:'postres', component: postres},
    {path: '/snacks', name:'snacks', component: snacks}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router