<template>
  <div class="home">
    <Slider/>
    <div class="home__header">
      <h2 class="home__header__title">Все кроссовки</h2>

      <div class="home__header__search">
        <img alt="search" src="../../assets/icons/search.svg"/>
        <input
            placeholder="Поиск..."
            style="
               display: block;
               border: 1px solid #F3F3F3;
               border-radius: 0 10px 10px 0;
               border-left: 0;
               padding-top: 15px;
               padding-bottom: 15px;
               color: #C4C4C4;
               font-size: 14px;
               font-weight: 400;
               outline: none;
                "
            type="text"
            @input="onChangeSearchInput"
        />
      </div>
    </div>
    <CardList :items="items" @addToFavorite="addToFavorite" @onClickAdd="onClickAdd"/>
  </div>
</template>

<script lang="ts" setup>
import CardList from "../../components/card/cardList/cardList.vue";
import {inject} from "vue";
import Slider from "../../components/slider/Slider.vue";

const {items, onChangeSearchInput, addToFavorite, onClickAdd} = inject('main')
</script>

<style lang="scss" scoped src="./home.scss">

</style>