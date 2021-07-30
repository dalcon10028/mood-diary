<template>
  <v-btn
    id="btn-google"
    large
    color="#FEDC00"
    class="ma-1"
    @click="handleLogin"
  >
    <v-avatar size="40">
      <v-img src="images/social/kakao.png"></v-img>
    </v-avatar>
  </v-btn>
</template>

<script>
export default {
  created() {},

  methods: {
    handleLogin() {
      // this.$kakao.Auth.login({
      //   success: authObj => {
      //     console.log(authObj);
      //     this.$kakao.API.request({
      //       url: '/v2/user/me',
      //       success (response) {
      //         console.log(response);
      //       },
      //       fail (error) {
      //         console.log(error);
      //       },
      //     });
      //   },
      //   fail: err => {
      //     console.log(err);
      //   },
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
#btn-google {
  min-width: 60px;
  width: 60px;
  height: 60px;
}
</style>
