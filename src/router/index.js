import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";
import Tags from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/tags/:tag",
    name: "Tags",
    component: Tags,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
