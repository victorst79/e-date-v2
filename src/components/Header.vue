<template>
  <v-app-bar
    id="navbar"
    app
    color="primary"
    dark
  >
    <v-container>
      <v-row>
        <v-col align="end">
          <router-link to="/login" class="mr-2">Login</router-link>
          <router-link to="/registry" class="mr-2">Registro</router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
#navbar {
  a {
    text-decoration: none;
    color: $w-text;
  }
}
</style>
