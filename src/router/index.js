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
    component: () => import("@/views/services.vue"),
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
