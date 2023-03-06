import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    username: "",
    password: "",
    isLoggedIn: false,
  }),
});
