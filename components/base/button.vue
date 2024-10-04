<template>
  <button class="custom-btn">
    <Icon
      v-if="isLoading"
      class="text-white text-xl"
      name="svg-spinners:ring-resize"
    />
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  isLoading?: boolean;
}

const props = defineProps<Props>();
</script>
