<template>
  <div class="favorites">
    <favorites-info v-if="!favoritesCount"/>
    <div v-else>
      <h2 class="favorites__title">Мои закладки</h2>
      <favorites-list/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FavoritesList from "../../components/favorites-list/favorites-list.vue";
import {inject} from "vue";
import FavoritesInfo from "../../components/favorites-list/favorites-info/favorites-info.vue";

const {favoritesCount} = inject('main');
</script>

<style lang="scss" scoped src="./favorites.scss">

</style>