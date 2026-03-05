<script setup>
import { useRoute } from "vue-router";
const route = useRoute(); //호출 당한 정보 값을 가져올 때는 route 호출 router
const memId = route.params.id;
// const search = route.query.keyword
console.log(memId);
// 호출 router 받는 쪽 route

import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const memberStore = useMemberStore();
const { member } = storeToRefs(memberStore);
const { findMemberById } = memberStore;

findMemberById(memId);

// const member = ref({});

// const findMemberById = async (id) => {
//   let info = await fetch(`/fallback/users/${id}`) // 매개변수를 통해 데이터 주고받기
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
//   member.value = info;
// };

// onBeforeMount(() => {
//   findMemberById(memId);
// });
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="'/'">Top</RouterLink> >
    <RouterLink :to="'/member/list'">회원 리스트</RouterLink> > 회원 상세 정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID</span>{{ member.id }}</div>
    <div><span>이름</span>{{ member.name }}</div>
    <div><span>메일주소</span>{{ member.email }}</div>
    <div><span>비고</span>{{ member.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
