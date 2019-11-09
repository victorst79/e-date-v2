import Vue from 'vue';
// @ts-ignore
import Vuetify from 'vuetify/lib';
import es from 'vuetify/src/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#6200EE',
        secondary: '#03DAC6',
        accent: '#82B1FF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#292929',
        secondary: '#bb86fc',
        accent: '#82B1FF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
  icons: {
    iconfont: 'md',
  },
});
