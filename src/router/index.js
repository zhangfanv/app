import VueRouter from 'vue-router';
import HomePage from '../business/home';
import LoginPage from '../business/login'
const routes = [
  {
    path: '/home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: LoginPage,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    redirect: '/home',
    meta: { requiresAuth: false }
  }
]


let v = new VueRouter({
  routes
})

v.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // eslint-disable-next-line no-constant-condition
    if (!0) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default v;
