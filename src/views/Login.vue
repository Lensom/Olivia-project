<template>
  <div class="form__auth-wrapper">
    <form action="#" class="form__auth" @submit.prevent="submitHandler">
      <div class="form__input-wrapper">
        <input
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          id="email"
          type="text"
          class="form__input"
        />
      </div>
      <div class="form__input-wrapper">
        <input id="password" type="password" class="form__input" />
      </div>
      <div class="form__submit-wrapper">
        <button type="submit">Submit</button>
      </div>
      <p>
        <router-link to="/registration">Регистрация</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
// import messagees from "@/utils/messages";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/");
    }
  }
};
</script>
