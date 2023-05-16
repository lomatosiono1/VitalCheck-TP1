import {createRouter, createWebHistory} from 'vue-router';
import SignInView from "@/views/SignInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import SignUpView from "@/views/SignUpView.vue";
import NotificationView from "@/views/NotificationView.vue";
import SettingsView from "@/views/SettingsView.vue";
import InventoryView from "@/views/InventoryView.vue";
import favoritosView from "@/views/backend/favoritosView.vue";
import membresiaView from "@/views/backend/membresiaView.vue";
import soporteView from "@/views/backend/soporteView.vue";
import perfilView from "@/views/backend/perfilView.vue";
import filtrarView from "@/views/backend/filtrarView.vue";
import inventoryView from "@/views/backend/inventoryView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: SignInView,
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInView,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
    },
    {
        path: '/notification',
        name: 'notification',
        component: NotificationView,
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
    },
    {
        path: '/inventory',
        name: 'inventory',
        component: InventoryView,
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: favoritosView,
    },
    {
        path: '/membresia',
        name: 'membresia',
        component: membresiaView,
    },
    {
        path: '/soporte',
        name: 'soporte',
        component: soporteView,
    },
    {
        path: '/perfil',
        name: 'perfil',
        component: perfilView,
    },
    {
        path: '/filtrar',
        name: 'filtrar',
        component: filtrarView,
    },
    {
        path: '/inventory1',
        name: 'inventory1',
        component: inventoryView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
