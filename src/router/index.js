import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Banner.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Thanks from "../views/Thanks.vue";
import Receipt from "../views/Receipt.vue";
import About from "../views/About.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/product/:id",
      name: "product",
      component: Product,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: Thanks,
    },
    {
      path: "/receipt",
      name: "receipt",
      component: Receipt,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
