import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from '@/common/config';

const ApiService = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource: string, params: any): any {
    return Vue.axios.get(resource, params)
      .catch(error => {
        throw new Error(`Error ApiService 001: ${error}`);
      });
  },

  post(resource: string, params: any): any {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource: string, slug: string ,params: any): any {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  delete(resource: string): any {
    return Vue.axios.delete(resource)
      .catch(error => {
        throw new Error(`Error ApiService 001: ${error}`);
      });
  },

};

export default ApiService;
