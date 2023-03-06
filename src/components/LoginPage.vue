<template>
  <div class="flex flex-col justify-center items-center w-full h-[80vh]">
    <form
      action=""
      class="border-2 border-blue-900 rounded-md px-10 pt-5 space-y-5"
      @submit="loginHandler"
    >
      <VInput color="primary" placeholder="Username" v-model="username" />
      <small class="text-red-500" v-if="err_username">Wrong username</small>
      <VInput
        color="primary"
        placeholder="Password"
        type="password"
        v-model="password"
      />
      <small class="text-red-500" v-if="err_password">Wrong username</small>
      <!-- <h1>{{ count }}</h1> -->
      <div class="text-center pb-5">
        <VBtn color="primary" @click="loginHandler"> Login </VBtn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLoginStore } from "@/stores/login";
import Router from "../router";
const username = ref<string | number>("");
const password = ref<string | number>("");
let err_username = ref<boolean>(false);
let err_password = ref<boolean>(false);

const LoginStore = useLoginStore();
const loginHandler = () => {
  if (username.value === "admin" && password.value === "admin") {
    LoginStore.$patch({
      isLoggedIn: true,
    });
    Router.push("/mahasiswa");
  } else if (username.value !== "admin") {
    err_username.value = true;
    err_password.value = false;
  } else if (password.value !== "admin") {
    err_password.value = true;
    err_username.value = false;
  }
};
</script>
