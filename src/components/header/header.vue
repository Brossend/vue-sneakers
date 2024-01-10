<template>
  <div class="header">
    <div class="logo">
      <img alt="logo" class="logo__photo" src="../../../src/assets/images/logo.png"/>
      <div>
        <h2 class="logo__title">VUE SNEAKERS</h2>
        <p class="logo__text">Магазин лучших кроссовок</p>
      </div>
    </div>
    <div class="nav">
      <button class="nav__button" @click="emit('closeDrawer')">
        <img alt="basket" class="nav__icon" src="../../assets/icons/cart.svg"/>
        <span class="nav__button__text">{{ props.totalPrice }} руб.</span>
      </button>
      <a>
        <img alt="marks" class="nav__icon" src="../../assets/icons/heart.svg"/>
        <span class="nav__link">Закладки</span>
      </a>
      <a>
        <img alt="profile" class="nav__icon" src="../../assets/icons/profile.svg"/>
        <span class="nav__link">Профиль</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  totalPrice: Number
})

const emit = defineEmits(['closeDrawer'])
</script>

<style scoped src="./header.scss">

</style>