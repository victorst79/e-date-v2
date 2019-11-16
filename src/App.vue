<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";

  a {
    text-decoration: none;
  }

</style>
