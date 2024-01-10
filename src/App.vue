<template>
  <Header :totalPrice="totalPrice" @closeDrawer="closeDrawer"/>
  <Drawer v-if="drawerOpen" @closeDrawer="closeDrawer"/>

  <div style="padding-top: 45px; margin-left: 45px; margin-right: 45px;">
    <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 45px;">
      <h2 style="align-self: center;
      color: #000;

      font-size: 32px;
      font-weight: 700;
      ">Все кроссовки</h2>

      <div style="display: flex; flex-direction: row;">
        <img alt="search" src="./assets/icons/search.svg" style="
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
import axios from "axios";
import {computed, onMounted, provide, reactive, ref, watch} from "vue";

import Header from "./components/header/header.vue";
import CardList from "./components/card/cardList/cardList.vue";
import Drawer from "./components/drawer/drawer.vue";

const items = ref([]);
const basketCards = ref([]);
const drawerOpen = ref(false);
const isOrderLoading = ref(false);
const filters = reactive({
  sortBy: '',
  searchQuery: ''
});
const totalPrice = computed(() => basketCards.value.reduce((acc, item) => acc + item.price, 0));
const basketIsEmpty = computed(() => basketCards.value.length === 0)
const basketButtonDisabled = computed(() => isOrderLoading.value || basketIsEmpty.value);
const closeDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
}
const onChangeSearchInput = (event: any) => {
  filters.searchQuery = event.target.value
};
const fetchFavorites = async () => {
  try {
    const {data: favorites} = await axios.get('https://c934ca6b9e7ec83f.mokky.dev/favorites');
    items.value = items.value.map((item: any) => {
      const favorite = favorites.find((favorite: any) => favorite.productId === item.id);

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      };
    });
  } catch (e) {
    console.error(e)
  }
};
const addToBasket = (item: any) => {
  basketCards.value.push(item);
  item.isAdded = true;
}
const removeToBasket = (item: any) => {
  basketCards.value.splice(basketCards.value.indexOf(item), 1);
  item.isAdded = false;
}
const onClickAdd = async (item: any) => {
  if (!item.isAdded) {
    addToBasket(item);
  } else {
    removeToBasket(item);
  }
}
const addToFavorite = async (item: any) => {
  try {
    if (!item.isFavorite) {
      const {data} = await axios.post('https://c934ca6b9e7ec83f.mokky.dev/favorites', {productId: item.id});
      item.isFavorite = true;
      item.favoriteId = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(`https://c934ca6b9e7ec83f.mokky.dev/favorites/${item.favoriteId}`);
      item.favoriteId = null;
    }
  } catch (e) {
    console.error(e);
  }
}
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
      title: '**'
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const {data} = await axios.get('https://c934ca6b9e7ec83f.mokky.dev/items', {
      params
    });
    items.value = data.map((obj: any) => ({
      ...obj,
      isFavorite: false,
      isAdded: false
    }));
  } catch (e) {
    console.error(e)
  }
}
const createOrder = async () => {
  try {
    isOrderLoading.value = true;
    await axios.post('https://c934ca6b9e7ec83f.mokky.dev/orders', {
      items: basketCards.value,
      totalPrice: totalPrice.value
    });

    basketCards.value.map((item) => {
      item.isAdded = false
    });
    basketCards.value = [];
  } catch (e) {
    console.error(e)
  } finally {
    isOrderLoading.value = false;
  }
}
onMounted(async () => {
  const localBasket = localStorage.getItem('basketCards');
  basketCards.value = localBasket ? JSON.parse(localBasket) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item: object) => {
    return ({
      ...item,
      isAdded: basketCards.value.some((basketItem) => basketItem.id === item.id)
    });
  });
});

watch(filters, fetchItems);

watch(basketCards, () => {
  localStorage.setItem('basketCards', JSON.stringify(basketCards.value));
}, {deep: true});

provide('basket', {
  basketCards,
  totalPrice,
  basketButtonDisabled,
  addToBasket,
  removeToBasket,
  onClickAdd,
  createOrder
});
</script>

<style lang='scss' src="./assets/styles/index.scss">

</style>
