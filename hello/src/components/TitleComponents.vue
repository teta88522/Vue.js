<template>
  <p>
    <b>{{ title }}<span v-text="content"></span></b>
  </p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
</script>
