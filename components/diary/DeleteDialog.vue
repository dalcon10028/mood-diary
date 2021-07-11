<template>
  <v-dialog v-model="value" max-width="290" @click:outside="updateDialog">
    <v-card class="py-3">
      <v-card-text>
        <v-list>
          <v-list-item class="text-center text--primary">
            정말 일기를 삭제하시겠습니까?
          </v-list-item>

          <v-list-item>
            <v-btn block dark color="#ff4081" @click="deleteDiary">
              영구삭제
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block dark color="secondary" @click="updateDialog">
              취소
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateDialog() {
      this.$emit('input', !this.value);
    },
    deleteDiary() {
      this.$emit('delete');
    },
  },
};
</script>

<style lang="scss" scoped>
.text-center.text--primary.v-list-item.theme--light {
  font-size: 1rem;
}
</style>
