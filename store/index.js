import { createStore } from "vuex";
import { toasts, toastFunctions } from "@/components/ui/toast/store";

export const state = () => ({
  user: {},
  account: null,
  toasts,
  redirectMatch: null,
});

export const mutations = {
  ...toastFunctions,
  setDialog(state, data) {
    state.dialog = data;
  },
  setRedirectMatch(state, data) {
    state.redirectMatch = data;
  },
  setUser(state, data) {
    state.user = data;
  },
  setAccount(state, data) {
    if (state.account) return;
    state.account = data;
  },
};
