<template>
  <div class="myContainer pt-[60px] text-center mb-20">
    <h1 class="heading1 mb-5">MISSION</h1>
    <p class="text-customSlate text-base md:max-w-[71%] mx-auto">
      {{ HomeMission }}
      {{ $config.public.STRAPI_URL }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  HomeMission?: string;
}

const props = defineProps<Props>();
</script>
