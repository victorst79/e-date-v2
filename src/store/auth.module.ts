import ApiService from '@/common/api.service';

const state = {
  user: {},
  isAuthenticated: false,
};

const getter = {
  currentUser(state: object): any {
    // @ts-ignore
    return state.user;
  },

  isAuthenticated(state: object): any {
    // @ts-ignore
    return state.isAuthenticated;
  },
};
