<template>
  <v-card max-width="700">
    <v-card-text>
      <Headline />

      <v-form ref="form" v-model="valid" class="mt-6" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="이메일 *"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :rules="emailRules"
          label="비밀번호 (8 글자 이상) *"
          required
        ></v-text-field>

        <v-checkbox v-model="checkbox" label="이메일 저장하기"></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          @click="validate"
        >
          로그인
        </v-btn>
      </v-form>

      <v-divider class="ma-8"></v-divider>

      <div class="ma-5 text-center">
        <p>소셜 계정으로 로그인</p>
        <LoginGoogle />
        <LoginNaver />
        <LoginKakao />
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import Headline from '../components/login/Headline';
import LoginGoogle from '../components/login/LoginGoogle';
import LoginNaver from '../components/login/LoginNaver';
import LoginKakao from '../components/login/LoginKakao';

export default {
  components: {
    Headline,
    LoginGoogle,
    LoginNaver,
    LoginKakao,
  },

  data() {
    return {
      valid: true,
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      checkbox: false,
    };
  },
  mounted() {},

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
