<template>
  <div class="info">
    <img v-if="!order" alt="box" src="../../../assets/images/package-icon.png"/>
    <img v-else alt="box" src="../../../assets/images/order-success-icon.png"/>
    <h2 v-if="!order">{{ props.title }}</h2>
    <h2 v-else style="color: #9DD458">{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <button @click="emit('closeDrawer')">
      <img alt="exit" src="../../../assets/icons/arrow-next.svg"/>
      <span>Вернуться назад</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  order: Boolean
});

const emit = defineEmits(['closeDrawer'])
</script>

<style lang="scss" scoped src="./drawer-info.scss">

</style>