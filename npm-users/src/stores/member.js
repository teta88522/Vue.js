import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useMemberStore = defineStore(
  "member",
  () => {
    // state
    // 전체회원
    const members = ref([]);
    // 개인회원
    const member = ref({});

    // getters
    // 전체 회원 수
    const count = computed(() => {
      return members.value.length;
    });

    //action => 데이터 변경 = 일반 함수
    // 서버에서 전체 회원 정보 가져오기
    const findMemberList = async () => {
      let list = await fetch("/fallback/users") // 콜백 함수를 제거하면 일반 함수 실행처럼 값을 받음
        .then((resp) => resp.json())
        .catch((err) => console.log(err));

      members.value = list;
    };

    // 서버에서 지정한 회원의 상세정보 가져오기

    const findMemberById = async (id) => {
      let info = await fetch(`/fallback/users/${id}`) // 매개변수를 통해 데이터 주고받기
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
      member.value = info;
    };

    // 서버에 회원 정보 등록하기
    const createMember = async (memberInfo) => {
      //1. 서버에 등록 요청
      let info = await fetch(`/fallback/users`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(memberInfo),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return info.id;
    };

    return {
      members,
      member,
      count,
      findMemberList,
      findMemberById,
      createMember,
    };
  },
  {
    persist: true, // 상태 자동 저장 활성화
  },
);
