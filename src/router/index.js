import Vue from "vue";
import VueRouter from "vue-router";
import jwtDecode from "jwt-decode";

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
    redirect: "/cinemas/all",
    component: () => import('../views/Home/Cinemas'),
    children: [
      {
        path: "/cinemas/all",
        component: () => import("../views/Home/Cinemas/CinemaAll")
      },
      {
        path: "/cinemas/details/:id",
        component: () => import("../views/Home/Cinemas/CinemaDetails")
      },
      {
        path: "/cinemas/movie/:id",
        component: () => import('../views/Home/Cinemas/CinemaByMovie')
      }
    ]
  },

  //Login page
  {
    path: '/login',
    component: () => import('../views/Home/Login'),
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        try {
          const decode = jwtDecode(localStorage.getItem("token"));
          if (decode.userType === "admin") {
            next('/admin/dashboard');
          } else if (decode.userType === "client") {
            next('/');
          }
        } catch {
          localStorage.removeItem("token");
          next("/login");
        }
      } else {
        next();
      }
    },
  },

  //Signup page
  {
    path: '/signup',
    component: () => import('../views/Home/SignUp'),
    children: [
      {
        path: "/signup",
        component: () => import('../views/Home/SignUp/SignUpRequest')
      },
      {
        path: "/signup/done",
        component: () => import('../views/Home/SignUp/SignUpDone')
      }
    ]
  },

  //Ticket pages
  {
    path: '/ticket/:id/:time/:cinema',
    component: () => import('../views/Home/Ticket'),
    children: [
      {
        path: "/ticket/:id/:time/:cinema",
        component: () => import('../views/Home/Ticket/TicketBuy')
      },
      {
        path: "/ticket/confirm",
        component: () => import('../views/Home/Ticket/TicketConfirm')
      }
    ]
  },

  //About page
  {
    path: "/about",
    component: () => import("../views/Home/AboutUs")
  },

  //Contact page
  {
    path: "/contact",
    component: () => import("../views/Home/ContactUs"),
    children: [
      {
        path: "/contact",
        component: () => import('../views/Home/ContactUs/ContactRequest')
      },
      {
        path: '/contact/done',
        component: () => import('../views/Home/ContactUs/ContactDone')
      }
    ]
  },

  //Admin page
  {
    path: '/admin',
    component: () => import('../views/Admin'),
    redirect: '/admin/dashboard',
    children: [
      {
        path: '/admin/dashboard',
        component: () => import('../views/Admin/AdminDashboard')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
