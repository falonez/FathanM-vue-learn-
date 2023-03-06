<script setup lang="ts">
import { ref } from "vue";
import type { VDataTableHeader } from "@gits-id/table";

const states = ["active", "inactive"];

const items = [...Array(30)].map((_, index) => ({
  index,
  name: `Mahasiswa-${index}`,
  email: `Mahasiswa-${index}@gmail.com`,
  age: index + 1 * 10,
  state: states[Math.floor(Math.random() * states.length)],
}));

const headers = ref<VDataTableHeader[]>([
  {
    value: "index",
    text: "ID",
  },
  {
    value: "name",
    text: "Name",
  },
  {
    value: "email",
    text: "Email",
  },
]);
</script>

<template>
  <div class="px-[10%] pt-[7%]">
    <VDataTable
      :items="items"
      header-class="bg-blue-600"
      hover
      hover-class="transition duration-300 hover:text-white"
      :headers="headers"
    />
  </div>
</template>
