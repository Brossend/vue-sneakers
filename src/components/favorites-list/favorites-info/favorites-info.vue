<template>
  <div class="info">
    <img class="info__image" alt="face" src="../../../assets/images/emoji-1.png" />
    <h2 class="info__title">Закладок нет :(</h2>
    <p class="info__text">Вы ничего не добавляли в закладки</p>
      <button @click="router.push('/')" class="info__button">
        <img alt="exit" src="../../../assets/icons/arrow-next.svg"/>
        <span>Вернуться назад</span>
      </button>
  </div>
</template>

<script setup lang="ts">
  import {useRouter} from "vue-router";

  const router = useRouter()
</script>

<style scoped lang="scss" src="./favorites-info.scss">

</style>