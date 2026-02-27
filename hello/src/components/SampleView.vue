<template>
  <h3>sample page</h3>
  <p>이름은 {{ name }}</p>
  <p>{{ count }}초</p>
  <p>원의 반지름은{{ data.radius }} 원의 넓이는{{ area }}</p>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

//일반 변수 = ref 객체 reactive
let name = ref("홍길동");
let count = ref(0);
const data = reactive({ PI: 3.14, radius: 3, area: 0 }); //변경 =>
const area = computed(() => {
  return data.PI * data.radius * data.radius;
}); // 계산된 속성

setInterval(() => {
  count.value += 1;
  data.radius = Math.ceil(Math.random() * 10);
  data.area = data.PI * data.radius * data.radius;
}, 3000);

setTimeout(() => {
  name.value = "Hong";
}, 3000);
</script>
