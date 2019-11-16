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
              @keyup.enter="changePhaseLogin()"
            ></v-text-field>
            <v-row>
              <v-col class="footer-form" cols="10" offset="1">
                  <router-link to="/register" class="primary--text font-weight-bold">Crear cuenta</router-link>
                  <v-btn
                    :right="true"
                    color="primary"
                  >Siguiente</v-btn>
              </v-col>
            </v-row>
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
  methods: {
    changePhaseLogin: function(userName : string): void {
        this.$socket.emit('CHECK_USER_NAME', JSON.stringify(userName) :);
    }
  },
// @ts-ignore
  sockets: {
    VERIFY_USER_NAME: (data: boolean) => {
      console.log(data);
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

  .footer-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
