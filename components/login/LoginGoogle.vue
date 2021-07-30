<template>
  <v-btn
    id="btn-google"
    large
    color="#E94235"
    class="ma-1"
    @click="handleLogin"
  >
    <v-avatar size="40">
      <v-img src="images/social/google.png"></v-img>
    </v-avatar>
  </v-btn>
</template>

<script>
export default {
  methods: {
    async handleLogin() {
      try {
        const GoogleUser = await this.$gAuth.signIn();
        const userData = {
          email: GoogleUser.dt.Nt,
          avatar: GoogleUser.dt.DJ,
          username: GoogleUser.dt.Ue,
          token: GoogleUser.mc.access_token,
        };
        console.log(userData);
      } catch (error) {
        console.log(error);
      }
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
