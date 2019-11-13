<template>
  <v-container id="login-c">
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card>
          <h3 class="titulo text-center">Iniciar sesión</h3>
          <div v-if="validation == 0">
            <v-text-field
              v-model="user"
              label="Usuario"
              outlined
              autofocus
            ></v-text-field>
          </div>
          <div v-else-if="validation == 1">
            <v-text-field
              v-model="password"
              label="Contraseña"
              outlined
            ></v-text-field>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
        validation: '',
        user: '',
        password: ''
    }
  },
});
</script>

<style lang="scss">
#login-c {

  h3 {
    padding: 15px 0;
  }

  div.v-input {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
