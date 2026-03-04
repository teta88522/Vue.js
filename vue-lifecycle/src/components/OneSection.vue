<script setup>
import { defineProps, onBeforeMount, defineEmits } from "vue";
//props : ReadOnly

const props = defineProps({
  // 필드 : 프로퍼티 이름
  title: {
    type: String,
    required: true, // 필수여부 하지만 경고 수준에 그침
    validator: (val) => {
      return val != "";
    },
  },
  content: {
    type: [Object, String],
    default: "No Content", // 디폴트는 자주씀
  },
});

const emit = defineEmits(["sendMessage", "callStarPoint"]);

const createRandom = () => {
  let num = Math.floor(Math.random() * 5);
  // 이벤트 발생시 데이터 전달
  emit("callStarPoint", props.title, num);
};

onBeforeMount(() => {
  //주의 : <script>밑에서 변수를 통해서 props에 접근
  console.log(props.title);
  // 이벤트를 발생
  emit("sendMessage");
});
</script>
<template>
  <section class="box">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <p>
      <button type="button" v-on:click="createRandom()">임의값 생성</button>
    </p>
  </section>
</template>
<style scoped>
section {
  border: 3px solid olivedrab;
  margin: 10px;
}
</style>
