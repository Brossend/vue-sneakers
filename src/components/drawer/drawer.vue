<template>
  <div class="drawer">
    <div class="drawer__void">

    </div>
    <div class="basket">
      <div class="basket__header">
        <button @click="emit('closeDrawer')">
          <img alt="close" src="../../assets/icons/arrow-next.svg"/>
        </button>
        <h2 class="basket__header__title">Корзина</h2>
      </div>

      <div class="basket__list">
        <drawer-card
            v-for="item in basketCards"
            :key="item.id"
            :imageUrl="item.imageUrl"
            :price="item.price"
            :title="item.title"
            @removeToBasket="removeToBasket(item)"
        />
      </div>

      <div class="basket__description">
        <div class="description">
          <p class="description__text">Итого:</p>
          <span/>
          <p class="description__price">{{ totalPrice }} руб.</p>
        </div>
        <div class="description">
          <p class="description__text">Налог 5%:</p>
          <span/>
          <p class="description__price">{{ Math.round(totalPrice * 0.05) }} руб.</p>
        </div>

        <button :disabled="basketButtonDisabled" class="button" @click="createOrder">
          <span>Оформить заказ</span>
          <img alt="arrow" src="../../assets/icons/arrow-next.svg">
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DrawerCard from "./drawer-card/drawer-card.vue";
import {inject} from "vue";

const emit = defineEmits(['closeDrawer']);

const {basketCards, totalPrice, basketButtonDisabled, removeToBasket, createOrder} = inject('basket');
</script>

<style lang="scss" scoped src="./drawer.scss">

</style>