<script setup lang="ts">
import BasicLayout from './layout/BasicLayout.vue';
import { useLoginUserStore } from './stores/useLoginUserStore';
const loginUserStore =  useLoginUserStore()
loginUserStore.fetchLoginUser()
</script>

<template>
  <div id="app">
    <BasicLayout/>
  </div>
</template>

<style scoped>

</style>
