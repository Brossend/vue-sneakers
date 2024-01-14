<template>
  <div v-auto-animate class="favoritesList">
    <template v-for="item in items">
      <Card
          v-if="item.isFavorite"
          :key="item.id"
          :imageUrl="item.imageUrl"
          :isAdded="item.isAdded"
          :isFavorite="item.isFavorite"
          :price="item.price"
          :title="item.title"
          @addToFavorite="addToFavorite(item)"
          @onClickAdd="onClickAdd(item)"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import Card from "../card/card.vue";
import {inject} from "vue";

const {
  items,
  addToFavorite,
  onClickAdd
} = inject('main');
</script>

<style lang="scss" scoped src="./favorites-list.scss">

</style>