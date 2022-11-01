import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/views/services/index.vue"),
  },
  {
    path: "/services/software-development",
    name: "software-development",
    component: () => import("@/views/services/software-development.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog.vue"),
  },
  {
    path: "/careers",
    name: "careers",
    component: () => import("@/views/careers.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact.vue"),
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
