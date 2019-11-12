<template>
  <section id="home">
    <v-container class="head-home" primary :fluid="true">
      <h1 class="text-center white--text">E-Date</h1>
      <p class="text-center white--text">Mas cerca que nunca de tus clientes.</p>
      <v-btn rounded color="secondary">Comenzar</v-btn>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3 class="titulo">¿Por qué usar E-Date?</h3>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-hover v-slot:default="{ hover }">
              <v-col cols="12" md="6">
                <v-card outlined :elevation="hover ? 5 : 0">
                  <v-card-title>
                    <v-icon class="mr-1">compare_arrows</v-icon>
                    Conexion directa
                  </v-card-title>
                  <v-card-text>
                    La rapidez en la comunicacion entre cliente y negocion,
                    consigue una mayor eficacia y beneficion en tu negocio
                  </v-card-text>
                </v-card>
              </v-col>
            </v-hover>
            <v-hover v-slot:default="{ hover }">
              <v-col cols="12" md="6">
                <v-card outlined :elevation="hover ? 5 : 0">
                  <v-card-title>
                    <v-icon class="mr-1">compare_arrows</v-icon>
                    Conexion directa
                  </v-card-title>
                  <v-card-text>
                    La rapidez en la comunicacion entre cliente y negocion,
                    consigue una mayor eficacia y beneficion en tu negocio
                  </v-card-text>
                </v-card>
              </v-col>
            </v-hover>
            <v-hover v-slot:default="{ hover }">
              <v-col cols="12" md="6">
                <v-card outlined :elevation="hover ? 5 : 0">
                  <v-card-title>
                    <v-icon class="mr-1">compare_arrows</v-icon>
                    Conexion directa
                  </v-card-title>
                  <v-card-text>
                    La rapidez en la comunicacion entre cliente y negocion,
                    consigue una mayor eficacia y beneficion en tu negocio
                  </v-card-text>
                </v-card>
              </v-col>
            </v-hover>
            <v-hover v-slot:default="{ hover }">
              <v-col cols="12" md="6">
                <v-card outlined :elevation="hover ? 5 : 0">
                  <v-card-title>
                    <v-icon class="mr-1">compare_arrows</v-icon>
                    Conexion directa
                  </v-card-title>
                  <v-card-text>
                    La rapidez en la comunicacion entre cliente y negocion,
                    consigue una mayor eficacia y beneficion en tu negocio
                  </v-card-text>
                </v-card>
              </v-col>
            </v-hover>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/common.scss';

  #home {

    .head-home {
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 3rem;
      }

      > h1, p {
        padding: 15px 0px;
      }

    .v-card {
        transition: all;
        transition-duration: 1s;
        transition-timing-function: linear;
      }
    }
  }
</style>
