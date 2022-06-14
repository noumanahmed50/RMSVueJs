import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import AddRestu from "./components/AddRestu.vue";
import UpdateRestu from "./components/UpdateRestu.vue";
import AboutUS from "./components/AboutUs.vue";


import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "AddRestu",
    component: AddRestu,
    path: "/addrestu",
  },
  {
    name: "UpdateRestu",
    component: UpdateRestu,
    path: "/updaterestu/:id",
  },
  {
    name:"AboutUS",
    component:AboutUS,
    path:"/aboutus",
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
