<template>
  <div class="relative mb-10">
    <!-- Embla Carousel -->
    <div class="embla max-h-[500px]" ref="emblaRef">
      <div class="embla__container">
        <div class="embla__slide p-5">
          <NuxtImg src="/cover.png" class="object-contain w-full rounded-md" />
        </div>
        <div class="embla__slide p-5">
          <NuxtImg src="/cover3.png" class="object-contain w-full rounded-md" />
        </div>
        <div class="embla__slide p-5">
          <NuxtImg src="/cover.png" class="object-contain w-full rounded-md" />
        </div>
      </div>
    </div>

    <!-- Dot Buttons -->
    <div class="dot-buttons lg:bottom-[8%] bottom-[25%]">
      <button
        v-for="(snap, index) in scrollSnaps"
        :key="index"
        @click="onDotButtonClick(index)"
        :class="{ active: index === selectedIndex }"
        class="dot-button"
      ></button>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from "embla-carousel-vue";

// Set up Embla Carousel and state for dot navigation
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false });
const selectedIndex = ref(0); // Tracks the currently selected slide
const scrollSnaps = ref([]); // Holds the scroll snaps (positions)

// Function to scroll to a specific slide
const onDotButtonClick = (index) => {
  if (emblaApi.value) emblaApi.value.scrollTo(index);
};

// Initialize scroll snap positions and handle slide selection
const onInit = (api) => {
  scrollSnaps.value = api.scrollSnapList();
};

const onSelect = (api) => {
  selectedIndex.value = api.selectedScrollSnap();
};

watchEffect(() => {
  if (!emblaApi.value) return;

  // Initialize embla carousel and set up listeners
  onInit(emblaApi.value);
  onSelect(emblaApi.value);

  emblaApi.value
    .on("reInit", () => onInit(emblaApi.value))
    .on("reInit", () => onSelect(emblaApi.value))
    .on("select", () => onSelect(emblaApi.value));
});
</script>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
.dot-buttons {
  position: absolute;
  justify-content: center;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
}
.dot-button {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.dot-button.active {
  background-color: white;
}
</style>
