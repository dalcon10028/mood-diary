<template>
  <v-app-bar id="header" color="primary" dense app>
    <v-container>
      <v-row>
        <v-app-bar-title>
          <v-btn text color="info" @click="$router.push('/')">
            <Logo />
          </v-btn>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn text color="info" @click="$router.push('/login')">
          <v-icon>mdi-account</v-icon>
          <span>로그인</span>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
</style>
