import { createRouter, createWebHistory } from "vue-router";
import AppTop from "@/views/AppTop.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // 라우터 경로(필수)
      name: "main", // 라우터의 이름 (선택)
      component: AppTop, // 라우터의 컴포넌트 (필수)
    },
    {
      path: "/member/list",
      name: "memberList",
      // 동적으로 컴포넌트 호출 요청하지 않으면 컴포넌트 읽지 않음
      component: () => import("../views/member/MemberList.vue"),
    },

    // params : 경로에 데이터를 포함해서 전달 (필수)
    // query : 경로에 데이터를 붙여서 전달 (QueryString) (선택)
    {
      path: "/member/detail/:id", //params 방식
      name: "memberDetail",
      // 동적으로 컴포넌트 호출 요청하지 않으면 컴포넌트 읽지 않음
      component: () => import("@/views/member/MemberDetail.vue"),
    },
    {
      path: "/member/add",
      name: "memberAdd",
      // 동적으로 컴포넌트 호출 요청하지 않으면 컴포넌트 읽지 않음
      component: () => import("@/views/member/MemberAdd.vue"),
    },
  ],
});

export default router;
