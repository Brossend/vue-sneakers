<template>
  <div class="header">
    <router-link class="logo" to="/">
      <img alt="logo" class="logo__photo" src="../../../src/assets/images/logo.png"/>
      <div>
        <h2 class="logo__title">VUE SNEAKERS</h2>
        <p class="logo__text">Магазин лучших кроссовок</p>
      </div>
    </router-link>
    <div class="nav">
      <button class="nav__button" @click="closeDrawer">
        <img alt="basket" class="nav__icon" src="../../assets/icons/cart.svg"/>
        <span class="nav__button__text">{{ totalPrice }} руб.</span>
      </button>
      <router-link to="/favorites">
        <img alt="marks" class="nav__icon" src="../../assets/icons/heart.svg"/>
        <span class="nav__link">Закладки</span>
      </router-link>
      <router-link to="profile">
        <img alt="profile" class="nav__icon" src="../../assets/icons/profile.svg"/>
        <span class="nav__link">Профиль</span>
      </router-link>
    </div>
  </div>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
import {inject} from "vue";

const {totalPrice, closeDrawer} = inject('basket');
</script>

<style scoped src="./header.scss">

</style>