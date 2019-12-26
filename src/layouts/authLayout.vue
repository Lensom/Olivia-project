<template>
  <div class="form__body">
    <router-view />
  </div>
</template>


<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError);
    }
  }
  // В эти layouts мы выносим общие блоки на страницах Login и Registration
};
</script>