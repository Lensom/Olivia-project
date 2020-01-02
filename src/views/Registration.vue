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
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          placeholder="Пароль"
        />
        <small
          class="form__helper invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Введите пароль</small>
        <small
          class="form__helper invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</small>
      </div>
      <div class="form__input-wrapper">
        <input
          v-model.trim="name"
          type="text"
          class="form__input"
          :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
          placeholder="Ваше Имя"
        />
        <small
          class="form__helper invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Введите ваше имя</small>
      </div>
      <div class="form__input-wrapper">
        <label for="checkbox">
          <input id="checkbox" type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </div>
      <div class="form__submit-wrapper">
        <button class="btn waves-effect waves-light" type="submit" name="action">
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p>
        Есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
// import messagees from "@/utils/messages";

export default {
  name: "registration",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: v => v }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };

      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
