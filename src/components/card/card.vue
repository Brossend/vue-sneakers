<template>
  <div class="card">
    <button class="card__like-btn" @click="emit('addToFavorite')">
      <img v-if="isFavorite" alt="favorite" src="../../assets/icons/like-2.svg"/>
      <img v-else alt="favorite" src="../../assets/icons/like-1.svg"/>
    </button>
    <img :src="props.imageUrl" alt="product" class="card__image">
    <p class="card__title">{{ props.title }}</p>
    <div class="card__row">
      <div>
        <span class="card__cost">Цена:</span>
        <span class="card__cost-value">{{ props.price }} руб.</span>
      </div>
      <button class="card__plus-btn" @click="emit('onClickAdd')">
        <img v-if="isAdded" alt="plus"
             src="../../assets/icons/checked.svg"/>
        <img v-else alt="plus"
             src="../../assets/icons/plus.svg"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  title: String,
  imageUrl: String,
  price: Number,
  addToFavorite: Function,
  isFavorite: Boolean,
  isAdded: Boolean,
});

const emit = defineEmits(['addToFavorite', 'onClickAdd'])
</script>

<style lang="scss" scoped src="./card.scss">

</style>