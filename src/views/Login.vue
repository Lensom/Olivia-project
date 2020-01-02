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
          placeholder="Email"
        />
        <small
          class="form__helper invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small
          class="form__helper invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корректный Email</small>
      </div>
      <div class="form__input-wrapper">
        <input
          id="password"
          type="password"
          class="form__input"
          v-model.trim="password"
          placeholder="Password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <small
          class="form__helper invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Введите Пароль</small>
        <small
          class="form__helper invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</small>
      </div>
      <div class="form__submit-wrapper">
        <button class="btn waves-effect waves-light" type="submit" name="action">
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p>
        <router-link to="/registration">Регистрация</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "@/utils/messages";

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
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
