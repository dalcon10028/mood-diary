<template>
  <section>
    <h1 class="text-center font-weight-bold">공지사항</h1>
    <v-card
      v-for="(card, idx) in cards"
      :key="idx"
      class="mt-5"
      outlined
    >
      <v-card-text>
        <p class="black--text">
          <span class="mr-4 font-weight-bold">
            {{ card.date }}
          </span>
          {{ card.content }}
        </p>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          content: '일기작성시 날짜를 선택할 수 있도록 업데이트 하였습니다.',
          date: '2019.12.04',
        },
        {
          content:
            '오늘부로 Facebook (페이스북) 계정을 이용한 손쉬운 로그인.회원가입이 지원됩니다.',
          date: '2017.07.04',
        },
        {
          content: "마이일기가 '모닥불' 이란 이름으로 새롭게 런칭하였습니다.",
          date: '2017.06.30',
        },
        {
          content: '마이일기의 테마가 새롭게 변경되었습니다.',
          date: '2013.04.13',
        },
        {
          content: '마이일기의 레이아웃이 새롭게 변경되었습니다.',
          date: '2012.05.10',
        },
        {
          content: '날짜 정렬문제 버그를 해결하였습니다.',
          date: '2012.03.02',
        },
        {
          content: '마이일기가 전반적으로 새롭게 업데이트되었습니다.',
          date: '2011.09.25',
        },
        {
          content: '마이일기가 런칭하였습니다.',
          date: '2007.01.04',
        },
      ],
    };
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

h1 {
  font-size: 2rem;
}
</style>
