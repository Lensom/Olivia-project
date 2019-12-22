import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'
import "./registerServiceWorker";

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

Vue.config.productionTip = false;
Vue.use(Vuelidate)


firebase.initializeApp({
  apiKey: "AIzaSyC07ysepXOmy19_xsXjp9yFCfugDB3QjS8",
  authDomain: "olivkaback.firebaseapp.com",
  databaseURL: "https://olivkaback.firebaseio.com",
  projectId: "olivkaback",
  storageBucket: "olivkaback.appspot.com",
  messagingSenderId: "611066505275",
  appId: "1:611066505275:web:e8bd502381c56f5330541e",
  measurementId: "G-XZLMH43GKL"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})

