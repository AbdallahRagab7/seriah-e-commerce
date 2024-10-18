<template>
  <div>
    <NuxtLoadingIndicator color="#022f98" />

    <Toaster
      position="top-right"
      :expand="false"
      richColors
      closeButton
      :duration="1600"
    />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use it here
// const { $toast } = useNuxtApp();
// import { toast } from "vue-sonner";
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
