<template>
  <v-container id="login-c">
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card>
          <h3 class="titulo text-center">Iniciar sesión</h3>
          <div v-show="validation === false" class="container-login">
            <v-text-field
              v-model="user"
              label="Usuario"
              outlined
              autofocus
              @keyup.enter="changePhaseLogin()"
            ></v-text-field>
            <v-row>
              <v-col class="footer-form" cols="10" offset="1">
                <router-link to="/register" class="primary--text font-weight-bold">Crear cuenta
                </router-link>
                <v-btn
                  :right="true"
                  color="primary"
                  @click="changePhaseLogin()"
                >Siguiente
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <transition name="slide-x-reverse-transition">
            <div v-show="validation === true" class="container-login">
              <v-text-field
                v-model="password"
                label="Contraseña"
                outlined
                autofocus
                @keyup.enter="changePhaseLogin()"
              ></v-text-field>
              <v-row>
                <v-col class="footer-form" cols="10" offset="1">
                  <router-link to="/login" class="primary--text font-weight-bold">
                  </router-link>
                  <v-btn
                    :right="true"
                    color="primary"
                    @click="changePhaseLogin()"
                  >Iniciar Sesión
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </transition>
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
        validation: false,
        user: '',
        password: '',
    }
  },
  methods: {
    changePhaseLogin: function(userName: string = this.user): void {
      // @ts-ignore
      this.$axios.get('/getUserName', userName)
          .then( (response: { data: any; }) => {
             response.data.find( (element: string) => {
                 element == userName ? this.validation  = true : false;
             })
          });
    },
  },
// @ts-ignore
  sockets: {
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

  .container-login {
    position: relative;
  }
}
</style>
