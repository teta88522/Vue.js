<!-- views/ParentComponentApp.vue -->
<script setup>
// import 시 자동으로 하위요소로 등록
import OneSection from "@/components/OneSection.vue";
import { ref, reactive } from "vue";
const postList = reactive([
  { name: "김민교", message: "hello" },
  { name: "김상우", message: "good Morning" },
  { name: "이한나", message: "Today is" },
]);
const startName = ref("");
const starPoint = ref(0);
const printInfo = (name, point) => {
  startName.value = name;
  starPoint.value = point;
};
</script>
<template>
  <h1>멀티 컴포넌트</h1>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- <OneSection title="홍길동" content="반갑습니다" /> -->
    <OneSection v-on:send-message="console.log('자식이벤트 처리')" />
  </section>
  <section>
    <h2>별점</h2>
    <p>{{ startName }} / {{ starPoint }}점</p>
  </section>
  <section>
    <h2>컴포넌트 여러개</h2>
    <OneSection
      v-for="post in postList"
      v-bind:title="post.name"
      v-bind:content="post.message"
      v-on:callStarPoint="printInfo"
      >text 속성</OneSection
    >
  </section>
</template>

<style>
section {
  border: 3px dotted brown;
  margin: 10px;
}
</style>
