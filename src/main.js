import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min"
import messagesPlugin from "@/utils/messagesPlugin"
import currencyFilter from '@/filters/currency.filter'
import dateFilter from '@/filters/date.filter'

import Loader from '@/components/app/Loader'
import "./registerServiceWorker";

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

Vue.config.productionTip = false;

Vue.use(messagesPlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyC07ysepXOmy19_xsXjp9yFCfugDB3QjS8",
  authDomain: "olivkaback.firebaseapp.com",
  databaseURL: "https://olivkaback.firebaseio.com",
  projectId: "olivkaback",
  storageBucket: "olivkaback.appspot.com",
  messagingSenderId: "611066505275",
  appId: "1:611066505275:web:e8bd502381c56f5330541e",
  measurementId: "G-XZLMH43GKL"
});

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

