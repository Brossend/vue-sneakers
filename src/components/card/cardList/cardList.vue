<template>
  <div class="cardList" v-auto-animate>
    <Card
        v-for="item in props.items"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :isAdded="item.isAdded"
        :isFavorite="item.isFavorite"
        :price="item.price"
        :title="item.title"
        @addToFavorite="emit('addToFavorite', item)"
        @onClickAdd="emit('onClickAdd', item)"
    />
  </div>
</template>

<script lang="ts" setup>
import Card from "../card.vue";

const props = defineProps({
  items: Array,
});

const emit = defineEmits(['addToFavorite', 'onClickAdd'])
</script>

<style lang="scss" scoped src="./cardList.scss">

</style>