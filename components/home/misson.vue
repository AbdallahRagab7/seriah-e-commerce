<template>
  <div class="myContainer pt-[60px] text-center mb-20">
    <h1 class="heading1 mb-5">Mission</h1>
    <p
      ref="missionSection"
      class="text-customSlate text-base md:max-w-[71%] mx-auto mission"
      :class="{ 'animate-text': isVisible }"
    >
      {{ HomeMission }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  HomeMission?: string;
}
const props = defineProps<Props>();

const missionSection = ref(null);
const isVisible = ref(false);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  if (missionSection.value) {
    observer.observe(missionSection.value);
  }
});
</script>

<style scoped>
.mission {
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s ease;
  transform: translateY(50px);
}

.animate-text {
  opacity: 1;
  transform: translateY(0);
}
</style>
