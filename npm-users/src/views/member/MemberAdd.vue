<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
import { reactive } from "vue";

// 회원정보
const member = reactive({
  // 필드 명 : 서버와 통신 시 서버에서 제공하는 이름 참조
  id: "",
  name: "",
  email: "",
  phone: "",
});

import { useMemberStore } from "@/stores/member";
const memberStore = useMemberStore();
const addMember = async () => {
  // 기존 fetch 함수 대신 store의 action 함수를 호출
  let newId = await memberStore.createMember(member);
  router.push({ name: "memberDetail", params: { id: newId } });
};

// const addMember = async () => {
//   //1. 서버에 등록 요청
//   let info = await fetch(`/fallback/users`, {
//     method: "post",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(member),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));

//   let newId = info.id;

//   //2. 페이지 전환
//   router.push({ name: "memberDetail", params: { id: newId } });
//   // router.go(-1); // 뒤로가기 -뒤로 0은 새로 고침 + 앞으로
// };
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="'/'">Top</RouterLink> >
    <RouterLink :to="'/member/list'">회원 리스트</RouterLink> > 회원 정보 추가
  </p>
  <h3>회원 정보 추가</h3>
  <div>
    <div><span>ID</span><input type="text" v-model="member.id" /></div>
    <div><span>이름</span><input type="text" v-model="member.name" /></div>
    <div>
      <span>메일주소</span><input type="email" v-model="member.email" />
    </div>
    <div><span>연락처</span><input type="text" v-model="member.phone" /></div>
    <button type="button" @click="addMember()">등록</button>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
