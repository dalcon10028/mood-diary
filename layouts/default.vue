<template>
  <v-app id="app">
    <Header />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3">
            <NavigationDrawer />
          </v-col>
          <v-col>
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/header/Header'
import NavigationDrawer from '~/components/navbar/NavigationDrawer.vue'

export default {
  components: {
    Header,
    NavigationDrawer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #FFFCFA;
}
</style>
