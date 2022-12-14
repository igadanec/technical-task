import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Tetikus from "@namchee/tetikus";
import "@namchee/tetikus/dist/tetikus.css";
import "@/assets/styles/base.scss";

const app = createApp(App);

app.use(Tetikus);
app.use(store);
app.use(router);
app.mount("#app");
