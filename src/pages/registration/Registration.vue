<template>
  <div class="registration">
    <form class="form" @submit.prevent="authStore.signUp(email, password)">
      <h2>Регистрация</h2>
      <label>Электронная почта</label>
      <input v-model="email" type="email">
      <label>Пароль</label>
      <input v-model="password" type="password">
      <button class="form__button" type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import {useAuthStore} from "../../store/auth/index.js";
  import {ref} from "vue";

  const authStore = useAuthStore();

  const email = ref('');
  const password = ref('');
</script>

<style scoped lang="scss" src="./Registration.scss">

</style>