import { createRouter, createWebHistory } from "vue-router"; // 정보를 한번에 임폴트 하지만 보여주는 건 전부 보여줄 수 없으니 라우터로 원하는 부분만 보여줌
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  // history 객체와 연동여부
  history: createWebHistory(import.meta.env.BASE_URL),
  // vue-router가 사용하는 route(endpoint + service + view or data)정보
  routes: [
    {
      path: "/", // 라우트 경로 (필수)
      name: "home", // 라우트 이름(권장) => 나중에 경로가 복잡해지면 찾기가 경로로 부르기가 힘듬
      component: HomeView, // 라우트를 통해 불러낼 컴포넌트
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"), // 사용하지 않는 페이지 read방지
    },
    {
      path: "/bind",
      name: "directiveBind",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/DirectiveBind.vue"),
    },
    {
      path: "/model",
      name: "directiveModel",
      component: () => import("../views/DirectiveModel.vue"),
    },
    {
      path: "/on",
      name: "directiveOn",
      component: () => import("../views/DirectiveOn.vue"),
    },
    {
      path: "/if",
      name: "directiveIf",
      component: () => import("../views/DirectiveIf.vue"),
    },
    {
      path: "/for",
      name: "directiveFor",
      component: () => import("../views/DirectiveFor.vue"),
    },
    {
      path: "/todo",
      name: "directiveTodo",
      component: () => import("../views/ToDoDirective.vue"),
    },
  ],
});

export default router;
