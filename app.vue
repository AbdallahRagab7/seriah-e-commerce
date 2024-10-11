<template>
  <div>
    <!-- <NuxtLoadingIndicator color="rgba(236, 28, 36, 1)" /> -->

    <Toaster position="top-right" :expand="false" richColors />

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
