<template>
  <div class="relative mb-10">
    <!-- Embla Carousel -->
    <div class="embla max-h-[500px]" ref="emblaRef">
      <div class="embla__container">
        <div v-for="image in images" :key="image" class="embla__slide p-5">
          <NuxtImg
            :src="image"
            alt="Slider Image"
            class="object-contain w-full rounded-md"
          />
        </div>
      </div>
    </div>

    <div
      class="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <h1
        class="animated-heading text-stroke text-2xl !text-white md:text-4xl font-bold md:mb-2"
      >
        Welcome To Seriah
      </h1>

      <button
        class="animated-btn custom-btn w-[200px] mt-2 text-[12px] sm:text-base font-bold rounded-md p-2 md:p-3"
      >
        SHOP NOW
      </button>
    </div>

    <!-- Dot Buttons -->
    <div class="dot-buttons lg:bottom-[8%] bottom-[16%]">
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

const images = ["/cover3.png", "/cover.png", "/cover.png"];

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

.text-stroke {
  -webkit-text-stroke: 0.2px rgb(184, 0, 0);
}

.animated-heading {
  display: block;
  opacity: 0;
  animation: jump-down 0.9s forwards ease-out;
}
.animated-btn {
  opacity: 0;
  animation: jump-up 0.9s forwards ease-out;
}

/* Keyframe for jump-in animation */
@keyframes jump-down {
  0% {
    opacity: 0;
    transform: translateY(-300%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes jump-up {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
