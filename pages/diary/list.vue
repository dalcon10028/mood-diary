<template>
  <section>
    <v-card
      class="mt-5"
      max-width="960"
      outlined
      v-for="(card, idx) in cards"
      :key="idx"
    >
      <v-card-text>
        <div class="ma-3 d-flex">
          <div>{{ card.datetime }}</div>
          <div class="ml-auto">
            날씨:
            <v-icon right color="green darken-2"
              >mdi-weather-{{ card.weatherIcon }}</v-icon
            >
            {{ card.weatherTitle }} | 기분:
            <v-icon dark>mdi-emoticon-{{ card.moodIcon }}-outline</v-icon>
            {{ card.moodTitle }}
          </div>
        </div>

        <h1 class="ma-3 text--primary">{{ card.title }}</h1>
        <div class="ma-3 text--primary" v-html="card.content"></div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large icon color="accent">
          <v-icon>mdi-clipboard-edit</v-icon>
        </v-btn>
        <v-btn large icon color="error" @click.stop="openDialog(idx)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <DeleteDialog v-model="dialog" @delete="deleteDiary" />
  </section>
</template>

<script>
import DeleteDialog from '../../components/diary/DeleteDialog.vue';

import { fetchAllDiaryList, deleteDiary } from '../../api/diary.js';

export default {
  components: {
    DeleteDialog,
  },

  async asyncData() {
    try {
      const { data } = await fetchAllDiaryList();
      this.cards = data;
    } catch (error) {
      throw new Error(error);
    }
    return {
      cards: data
    }
  },

  data() {
    return {
      seletedId: 1,
      dialog: false,
    };
  },



  // created() {
  //   this.fetchAllDiaryList();
  // },

  methods: {
    openDialog(idx) {
      this.seletedId = idx;
      this.dialog = true;
    },

    async fetchAllDiaryList() {
      try {
        const { data } = await fetchAllDiaryList();
        console.log(data);
        this.cards = data;
      } catch (error) {
        throw new Error(error);
      }
    },

    async deleteDiary() {
      const id = this.cards[this.seletedId].id;
      const { data } = await deleteDiary(id);
      console.log(data);
      this.dialog = false;
      this.fetchAllDiaryList();
    },
  },
};
</script>
