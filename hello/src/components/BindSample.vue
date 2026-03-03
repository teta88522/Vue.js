<!-- 85p 해보긩 긩긩이 -->
<script setup lang="ts">
import { ref } from "vue";

const url = ref{"https://vuejs.org/"};
</script>

<template>
  <p><a v-bind:href="https://vuejs.org/" target="_blank">Vue.js 사이트</a></p>
</template>
