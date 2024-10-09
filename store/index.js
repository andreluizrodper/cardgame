import { createStore } from "vuex";
import { toasts, toastFunctions } from "@/components/ui/toast/store";

export default createStore({
  state: {
    user: {},
    account: null,
    toasts,
    redirectMatch: null,
  },
  mutations: {
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
  },
});
