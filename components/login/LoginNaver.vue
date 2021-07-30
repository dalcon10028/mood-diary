<template>
  <v-btn id="btn-naver" large color="#55B049" class="ma-1" @click="handleLogin">
    <v-avatar size="40">
      <v-img src="images/social/naver.png"></v-img>
    </v-avatar>
  </v-btn>
</template>
<script>
export default {
  methods: {
    handleLogin() {
      window.location.replace(
        `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.VUE_APP_NAVER_CLIENT}&response_type=code&redirect_uri=http://localhost:8080/login/callback&state=1234`,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#btn-naver {
  min-width: 60px;
  width: 60px;
  height: 60px;
}
</style>
