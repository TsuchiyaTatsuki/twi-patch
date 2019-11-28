import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Movie from '../components/Movie.vue'
// import store from '../store'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'Movie',
        component: Movie
      },
    ],
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next({
          path: '/',
        })
      }
    });
  } else if (to.name === 'Login') {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({
          path: '/Home',
        })
      } else {
        next()
      }
    });
  } else {
    next()
  }
})

export default router
