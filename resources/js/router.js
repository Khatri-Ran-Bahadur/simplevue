import { createRouter, createWebHistory } from 'vue-router';
import Welcome from './components/Welcome.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token');
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    // If user is already logged in, redirect them away from guest pages (optional but good UX)
    if (token && (to.name === 'Login' || to.name === 'Register' || to.name === 'Welcome')) {
       // Let them allow navigate to welcome page if they want, but maybe usually dashboard is better
       // For now, let's keep it simple and just protect /home.
       // However, often you want to redirect logged-in users from /login to /home.
       if (to.name === 'Login' || to.name === 'Register') {
           next({ name: 'Home' });
           return;
       }
    }
    next();
  }
});

export default router;
