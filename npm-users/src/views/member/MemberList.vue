<!-- views/AppTop.vue -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter(); // Router 객체를 반환
const goToDetail = (memberId) => {
  router.push({ name: "memberDetail", params: { id: memberId } }); // 호출 하고자 하는 정보 전달
};
import { ref, onBeforeMount } from "vue";

import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();

import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const memberStore = useMemberStore();
const { members } = storeToRefs(memberStore);
const { findMemberList } = memberStore;

findMemberList();

// 전체 회원

// const members = ref([]);

// const server = "https://jsonplaceholder.typicode.com";
// const fineMemberList = async () => {
//   let list = await fetch("/fallback/users") // 콜백 함수를 제거하면 일반 함수 실행처럼 값을 받음
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));

//   members.value = list;
//   counterStore.count = members.value.length;
// };

// // LifeCycle hook은 마지막에 작성
// // onBeforeMount : Lifecycle hook 죽 가장 먼저 실행
// onBeforeMount(() => {
//   // 서버에 초기데이터 요청
//   fineMemberList();
// });
</script>
<template>
  <h1>회원 관리</h1>
  <p><RouterLink v-bind:to="{ name: 'main' }">Top</RouterLink> > 회원 리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은 <RouterLink :to="{ name: 'memberAdd' }">여기</RouterLink>를 클릭
  </p>
  <ul>
    <li v-for="info in members" v-on:click="goToDetail(info.id)">
      ID가 {{ info.id }}인 {{ info.name }}님
    </li>
  </ul>
</template>
