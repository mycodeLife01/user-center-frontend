<script setup lang="ts">
import { userCurrent } from '@/api/user'
import GlobalHeader from '../components/GlobalHeader.vue'
userCurrent().then((res) => {
  console.log(res)
});
</script>
<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.codefather.cn/" target="_blank">友链 : 编程导航</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style>
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  padding: 20px;
  margin-bottom: 20px;
}

#basicLayout .header {
  background: white;
  margin-bottom: 16px;
  padding-inline: 20px;
  color: unset;
}
</style>
