<template>
  <main>
    <comments-page></comments-page>
  </main>
</template>

<script>
import CommentsPage from './pages/CommentsPage.vue';
export default {
  name: 'App',
  components: { CommentsPage },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&amp;display=swap&#39;');
:root {
  --font-main: 'Rubik', sans-serif;

  --Moderate-blue: hsl(238, 40%, 52%);
  --soft-red: hsl(358, 79%, 66%);
  --light-grayish-blue: hsl(239, 57%, 85%);
  --pale-red: hsl(357, 100%, 86%);

  --color-light-100: hsl(0, 0%, 100%);
  --color-light-200: hsl(228, 33%, 97%);
  --color-light-300: hsl(223, 19%, 92%);
  --color-light-400: hsl(211, 10%, 45%);
  --color-light-400-20: hsla(211, 10%, 45%, 0.2);
  --color-light-500: hsl(212, 25%, 25%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-main);
}
main {
  margin: auto;
  width: 800px;
  padding: 2rem 0;
}
#app {
  min-height: 100vh;
  background: var(--color-light-200);
}
@media only screen and (max-width: 900px) {
  main {
    width: 95%;
  }
}
</style>
