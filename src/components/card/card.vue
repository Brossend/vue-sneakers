<template>
  <div class="card">
    <button class="card__like-btn">
      <img alt="plus" src="../../assets/icons/like-1.svg"/>
    </button>
    <img alt="product" class="card__image" src="../../assets/images/order-success-icon.png">
    <p class="card__title">{{ 'Мужские Кроссовки Nike Blazer Mid Suede' }}</p>
    <div class="card__row">
      <div>
        <span class="card__cost">Цена:</span>
        <span class="card__cost-value">{{ 12999 }} руб.</span>
      </div>
      <button class="card__plus-btn">
        <img alt="plus" src="../../assets/icons/plus.svg"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped src="./card.scss">

</style>