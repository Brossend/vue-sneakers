<template>
  <div style="padding-top: 45px; margin-left: 45px; margin-right: 45px;">
    <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 45px;">
      <h2 style="align-self: center;
      color: #000;

      font-size: 32px;
      font-weight: 700;
      ">Все кроссовки</h2>

      <div style="display: flex; flex-direction: row;">
        <img alt="search" src="../../assets/icons/search.svg" style="
        display: block;
        border-radius: 10px 0 0 10px;
        border: 1px solid #F3F3F3;
        border-right: 0;
        padding: 15px;
        "/>
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

const {items, onChangeSearchInput, addToFavorite, onClickAdd} = inject('main')
</script>

<style lang="scss" scoped>

</style>