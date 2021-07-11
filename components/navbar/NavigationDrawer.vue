<template>
  <v-card outlined>
    <v-navigation-drawer
    floating
    permanent
    >
    <v-list
      dense
      rounded
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.url"
      >
      <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: '일기목록', icon: 'mdi-inbox', url: '/diary/list' },
        { title: '일기작성', icon: 'mdi-pencil', url: '/diary/create'},
        { title: '공지사항', icon: 'mdi-message-alert', url: '/notice' },
        { title: 'MOOD DIARY', icon: 'mdi-help-circle', url: '/about' },
      ],
    }
  }
}
</script>

<style>

</style>