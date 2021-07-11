<template>
  <v-card max-width="960" class="text-center text--primary">
    <v-card-text>
      <h1 class="text--primary mb-4">모닥불</h1>
      <p>(구: 마이일기 - myilgi.net)</p>
      <p class="text--primary">나만의 공간, 인터넷 일기장.</p>
      <p class="text--primary">당신의 삶을 기록해 보세요.</p>
      <v-btn
        class="info--text"
        color="primary"
        @click="$router.push('/diary/create')"
      >
        <v-icon>mdi-pencil</v-icon>
        일기작성
      </v-btn>
    </v-card-text>
  </v-card>
</template>
