import { createApp } from "vue";

import { initializeApp } from "firebase/app";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyCYQ75v_K5mGdCJi4sB1Hdy6hU5dbmp4Dw",
  authDomain: "mr-productions.firebaseapp.com",
  projectId: "mr-productions",
  storageBucket: "mr-productions.appspot.com",
  messagingSenderId: "474172739079",
  appId: "1:474172739079:web:3b2463fa9468ee614aa4a2",
};

export const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
