<template>
  <Header/>

  <div style="padding: 45px;">
    <h2>Все кроссовки</h2>

    <CardList/>
  </div>

  <Drawer/>
</template>

<script lang="ts" setup>
import Header from "./components/header/header.vue";
import CardList from "./components/card/cardList/cardList.vue";
import Drawer from "./components/Drawer/Drawer.vue";
</script>

<style lang='scss' src="./assets/styles/index.scss">

</style>
