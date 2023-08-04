import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

var carts = {
  data() {
    return {
      cart: [],
    };
  },
};

app.use(createPinia());
app.use(router);

app.mixin(carts);
app.mount("#app");
