<template>
  <div class="welcome">
    <h1>{{ text }}</h1>
    <button @click="handleText">Change Text</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Welcome",
  data() {
    return {
      text: "Welcome to Your Vue.js + TypeScript App",
    };
  },
  methods: {
    handleText() {
      this.text = "Berubah Abrakadaba";
    },
  },
};
</script>
