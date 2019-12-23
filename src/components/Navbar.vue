<template>
  <a class="navbar__logout" href="#" @click.prevent="logout">Выйти</a>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  }
};
</script>