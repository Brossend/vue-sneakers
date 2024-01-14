<template>
  <div class="favorites">
    <h2 class="favorites__title">Мои закладки</h2>

    <favorites-list/>
  </div>
</template>

<script lang="ts" setup>
import FavoritesList from "../../components/favorites-list/favorites-list.vue";
</script>

<style lang="scss" scoped src="./favorites.scss">

</style>