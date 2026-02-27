<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import TitleComp from "./components/TitleComponents.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <!-- 밑에 대문자로 구분 단어 두개가 합쳐져야 / 이걸로 마무리 가능함 -->
      <TitleComp title="제목 1" content="내용 1" />
      <TitleComp title="제목 2" content="내용 2" />
      <TitleComp title="제목 3" content="내용 3" />
      <HelloWorld msg="You did it!" name="hongkildong" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
