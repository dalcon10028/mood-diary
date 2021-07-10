<template>
  <v-app-bar color="primary" dark dense app>
    <v-container>
      <v-row>
        <v-app-bar-title>
          <v-btn text class="logo" @click="console.log(123)">
            <v-img
              max-width="36"
              max-height="36"
              src="../../assets/logo.png"
            ></v-img>
            모닥불
          </v-btn>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn text @click="console.log(123)">
          <v-icon>mdi-account</v-icon>
          로그인
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
  width: 200px;
}
</style>
