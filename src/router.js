import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Collect from "./views/Collect.vue";
import Add from "./views/Add.vue";
import Detail from "./views/Detail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/list",
      name: "list",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/List.vue")
    },
    {
      path: "/detail/:bid",
      name: "detail",
      component: Detail
    },
    {
      path: "/collect",
      name: "collect",
      component: Collect
    },
    {
      path: "/add",
      name: "add",
      component: Add
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
