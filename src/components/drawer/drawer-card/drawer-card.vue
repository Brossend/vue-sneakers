<template>
  <div class="card">
    <div>
      <img :alt="props.title" :src="props.imageUrl" class="card__image"/>
    </div>

    <div class="card__description">
      <p>{{ props.title }}</p>

      <div class="card__button">
        <b>{{ props.price }} руб.</b>
        <button @click="emit('removeToBasket')">
          <img alt="close" src="../../../assets/icons/close.svg"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  imageUrl: String,
  price: Number,
});

const emit = defineEmits(['removeToBasket']);
</script>

<style lang="scss" scoped src="./drawer-card.scss">

</style>