<template>
  <v-container id="login">
    <Login />
  </v-container>
</template>

<script lang="ts">
import Login from '../components/Login.vue';

export default {
  name: 'Login-view',
  components: {
    Login,
  },
};
</script>
