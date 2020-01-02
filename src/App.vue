<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/registration">Register</router-link>|
    </div>

    <navbar></navbar>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import authLayout from "@/layouts/authLayout";
import mainLayout from "@/layouts/mainLayout";

export default {
  name: "home",
  components: {
    navbar,
    authLayout,
    mainLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "authLayout";
    }
  }
};
</script>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import '~materialize-css/dist/css/materialize.min.css';
@import '~material-icons/iconfont/material-icons.css';
@import 'assets/index.css';

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
