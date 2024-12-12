import './css/app.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Account from './Pages/Account.vue';
import SignIn from './Pages/SignIn.vue';
import Password from './Pages/Password.vue';
import SignUp from './Pages/SignUp.vue';
import Dashboard from './Pages/Dashboard.vue';
import NotFound from './Pages/NotFound.vue';
import Jobs from './Pages/Jobs.vue';
import { createWebHistory, createRouter } from 'vue-router';
import setupAuthGuard from './middleware/auth';

const newRoutes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/', name: 'Account', component: Account },
  { path: '/sign-in', name: 'SignIn', component: SignIn },
  { path: '/password', name: 'Password', component: Password },
  { path: '/sign-up', name: 'SignUp', component: SignUp },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/jobs', name: 'Jobs', component: Jobs },
];

const router = createRouter({
  history: createWebHistory(),
  routes: newRoutes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

setupAuthGuard(router);

app.mount('#app');
