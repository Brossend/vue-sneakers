<template>
  <div class="auth">
    <form class="form" @submit.prevent="authStore.signIn(email, password, remember)">
      <h2>Вход</h2>
      <label>Электронная почта</label>
      <input v-model="email" type="email">
      <label>Пароль</label>
      <input v-model="password" type="password">
      <div class="form__checkbox">
        <input v-model="remember" type="checkbox">
        <label>Запомнить меня</label>
      </div>
      <button class="form__button" type="submit">Войти</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

import {useAuthStore} from "../../store/auth/index.js";
import {ref} from "vue";
import router from "../../router/index.js";

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const remember = ref(false);

if (authStore.isAuth === true) {
  router.push('/');
}
</script>

<style lang="scss" scoped src="./Auth.scss">

</style>