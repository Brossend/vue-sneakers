<template>
  <div class="drawer">
    <div class="drawer__void">

    </div>
    <div class="drawer__basket">
      <h2 class="drawer__basket__title">Корзина</h2>

      <div class="drawer__basket__description">
        <p class="drawer__basket__description__text">Итого:</p>
        <span/>
        <p class="drawer__basket__description__price">{{ 21498 }} руб.</p>
      </div>
      <div class="drawer__basket__description">
        <p class="drawer__basket__description__text">Налог 5%:</p>
        <span/>
        <p class="drawer__basket__description__price">{{ 1074 }} руб.</p>
      </div>

      <button class="drawer__basket__button">
        <span>Оформить заказ</span>
        <img alt="arrow" src="../../assets/icons/arrow-next.svg">
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped src="./Drawer.scss">

</style>