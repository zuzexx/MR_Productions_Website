import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/router.js";

createApp(App).mount("#app").$forceUpdate(router);
