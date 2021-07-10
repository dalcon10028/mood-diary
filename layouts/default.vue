<template>
  <v-app id="app">
    <Header />
    <Nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/header/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');

#app {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
