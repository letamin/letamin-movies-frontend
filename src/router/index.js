import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //Homepage
  {
    path: '/',
    component: () => import('../views/Home'),
  },

  //Movie details
  {
    path: "/details/:id",
    component: () => import("../views/Home/MovieDetails")
  },

  //Movies by Status
  {
    path: "/status/:status",
    component: () => import("../views/Home/MovieStatus"),
  },

  //Cinemas
  {
    path: "/cinemas",
    component: () => import('../views/Home/Cinemas')
  },

  //Adminpage
  {
    path: '/admin',
    component: () => import('../views/Admin')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
