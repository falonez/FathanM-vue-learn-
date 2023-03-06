<template>
  <VAppBar fixed color="dark" size="auto">
    <div
      class="px-[10%] flex flex-row justify-between w-full items-center py-1"
    >
      <VLogo white size="lg" />
      <div class="flex flex-row space-x-5" v-if="login">
        <VBtn color="warning" text flush href="mahasiswa"> Mahasiswa </VBtn>
        <VBtn color="warning" text flush> Dosen </VBtn>
        <VBtn color="warning" text flush> Matkul </VBtn>
      </div>
      <div class="pl-10" v-else>
        <VBtn color="secondary" outlined href="/"> Login </VBtn>
      </div>
    </div>
  </VAppBar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLoginStore } from "@/stores/login";

const LoginStore = useLoginStore();
const login = computed(() => LoginStore.isLoggedIn);
</script>
