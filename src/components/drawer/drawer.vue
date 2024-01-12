<template>
  <div class="drawer">
    <div class="drawer__void"></div>
    <div class="basket">
      <div class="basket__header">
        <button @click="emit('closeDrawer')">
          <img alt="close" src="../../assets/icons/arrow-next.svg"/>
        </button>
        <h2 class="basket__header__title">Корзина</h2>
      </div>

      <drawer-info v-if="totalPrice === 0" :description="'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'"
                   :order="false"
                   :title="'Корзина пустая'"
                   @closeDrawer="emit('closeDrawer')"/>

      <div v-if="!(totalPrice === 0)" class="basket__main">
        <div class="basket__list" v-auto-animate>
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
  </div>
</template>

<script lang="ts" setup>
import {inject} from "vue";
import DrawerCard from "./drawer-card/drawer-card.vue";
import DrawerInfo from "./drawer-info/drawer-info.vue";

const emit = defineEmits(['closeDrawer']);

const {basketCards, totalPrice, basketButtonDisabled, removeToBasket, createOrder} = inject('basket');
</script>

<style lang="scss" scoped src="./drawer.scss">

</style>