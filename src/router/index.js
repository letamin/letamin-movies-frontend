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

  //Promotions
  {
    path: "/promotions",
    component: () => import("../views/Home/Promotions"),
    redirect: "/promotions/all",
    children: [
      {
        path: "/promotions/all",
        component: () => import("../views/Home/Promotions/PromotionAll")
      },
      {
        path: "/promotions/details/:id",
        component: () => import("../views/Home/Promotions/PromotionDetails")
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

  //Redirect to admin dashboard
  {
    path: "/admin", redirect: "/admin/dashboard"
  },

  //Admin page
  {
    path: '/admin/dashboard',
    component: () => import('../views/Admin'),
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        try {
          const decode = jwtDecode(localStorage.getItem("token"));
          if (decode.userType === "admin") {
            next();
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
    children: [
      {
        path: '/admin/movies',
        component: () => import('../views/Admin/Movies'),
      },
      {
        path: '/admin/cinemas',
        component: () => import('../views/Admin/Cinemas')
      },
      {
        path: '/admin/promotions',
        component: () => import('../views/Admin/Promotions')
      },
      {
        path: '/admin/contacts',
        component: () => import('../views/Admin/Contacts')
      }
    ]
  },

  //Edit Movies
  {
    path: "/admin/movies/edit/:id",
    component: () => import('../views/Admin/Movies/EditMovie')
  },

  //Add Movies
  {
    path: '/admin/movies/add',
    component: () => import('../views/Admin/Movies/AddMovie')
  },

  //Delete Movies
  {
    path: '/admin/movies/delete/:id',
    component: () => import('../views/Admin/Movies/DeleteMovie')
  },

  //Edit Cinema
  {
    path: '/admin/cinemas/edit/:id',
    component: () => import('../views/Admin/Cinemas/EditCinema')
  },

  //Add Cinema
  {
    path: '/admin/cinemas/add',
    component: () => import('../views/Admin/Cinemas/AddCinema')
  },

  //Delete Cinema
  {
    path: '/admin/cinemas/delete/:id',
    component: () => import('../views/Admin/Cinemas/DeleteCinema')
  },

  //Details Contact
  {
    path: '/admin/contacts/details/:id',
    component: () => import('../views/Admin/Contacts/ContactDetails')
  },

  //Delete Contact
  {
    path: '/admin/contacts/delete/:id',
    component: () => import('../views/Admin/Contacts/ContactDelete')
  },

  //Add Promotion
  {
    path: '/admin/promotions/add',
    component: () => import('../views/Admin/Promotions/AddPromotion')
  },

  //Edit Promotion
  {
    path: '/admin/promotions/edit/:id',
    component: () => import('../views/Admin/Promotions/EditPromotion')
  },

  //Delete Promotion
  {
    path: '/admin/promotions/delete/:id',
    component: () => import('../views/Admin/Promotions/DeletePromotion')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
