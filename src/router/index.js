import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue"
import ThanksView from "../views/ThanksView.vue"
import ReceiptView from "../views/ReceiptView.vue"
import AboutView from "../views/AboutView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/product",
      name: "product",
      component: ProductView,
    },
    {
      path: "/product/:id/:img",
      name: "productView",
      component: ProductView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: ThanksView,
    },
    {
      path: "/receipt",
      name: "receipt",
      component: ReceiptView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    
  ],
});

export default router;
