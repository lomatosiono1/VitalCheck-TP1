import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import VueRouter from 'vue-router';
import router from "./router";

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'




const app = createApp(App);
app.use(PrimeVue);
app.use(VueRouter);
app.component("InputText", InputText);
app.use(router);
app.mount("#app");