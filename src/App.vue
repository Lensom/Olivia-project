<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import authLayout from "@/layouts/authLayout";
import mainLayout from "@/layouts/mainLayout";

export default {
  name: "home",
  computed: {
    layout() {
      return this.$route.meta.layout || "authLayout";
    }
  },
  components: {
    authLayout,
    mainLayout
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
