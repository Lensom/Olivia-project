<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/registration">Register</router-link>|
    </div>
    <router-view />
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from "./components/Navbar";

export default {
  name: "home",
  components: {
    navbar
  }
};
</script>


<style lang="stylus">
@import 'assets/index.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
