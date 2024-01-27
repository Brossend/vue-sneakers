<template>
  <div class="info">
    <img alt="face" class="info__image" src="../../../assets/images/emoji-1.png"/>
    <h2 class="info__title">Закладок нет :(</h2>
    <p class="info__text">Вы ничего не добавляли в закладки</p>
    <button class="info__button" @click="router.push('/')">
      <img alt="exit" src="../../../assets/icons/arrow-next.svg"/>
      <span>Вернуться назад</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style lang="scss" scoped src="./favorites-info.scss">

</style>