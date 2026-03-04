<script setup>
const props = defineProps(["todo"]);
const emit = defineEmits(["taskChecked", "delTask"]);

const todoCompleted = () => {
  // 부모에게 현재 todo의 no를 전달
  emit("taskChecked", props.todo.no);
};

const delTodo = () => {
  // 부모에게 현재 todo의 no를 전달
  emit("delTask", props.todo.no);
};
</script>

<template>
  <li :class="{ checked: todo.complete }" @click.self="todoCompleted">
    {{ todo.task }}
    <span class="close" @click.stop="delTodo">X</span>
  </li>
</template>
