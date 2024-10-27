<template>
  <div class="relative">
    <!-- Embla Carousel -->
    <div class="embla max-h-[500px]" ref="emblaRef">
      <div class="embla__container">
        <div
          v-for="slider in sliders"
          :key="slider.id"
          class="embla__slide relative w-full"
        >
          <NuxtImg
            v-if="status === 'pending'"
            src="/myPlaceHolder.jpg"
            alt="Slider Image"
            placeholer
            class="object-contain w-full rounded-sm max-h-[450px]"
          />
          <NuxtImg
            :src="`${$config.public.STRAPI_URL}${slider.attributes?.image?.data?.attributes?.url}`"
            alt="Slider Image"
            class="object-cover w-full rounded-sm max-h-[520px]"
          />

          <div
            class="animated-heading w-full absolute top-[30%] left-[10%] max-w-[400px] max-sm:max-w-[200px] max-sm:top-[10%]"
          >
            <h1
              class="!mb-[14px] max-md:!mb-1 text-stroke lg:text-[36px] !text-[#32323] text-[13px] sm:text-3xl font-semibold md:mb-2"
            >
              {{ slider.attributes.title }}
            </h1>
            <p class="text-[#32323] text-xs md:text-sm mb-8 max-md:!mb-3">
              {{ slider.attributes.description }}
            </p>

            <NuxtLink
              :to="slider.attributes.buttonUrl"
              class="animated-btn custom-btn w-[160px] mt-2 text-[12px] sm:text-base font-medium rounded-sm p-2 md:p-3"
            >
              {{ slider.attributes.buttonLabel }}
            </NuxtLink>
          </div>
        </div>
      </div>
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

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";

const images = ["/cover3.png", "/cover.png", "/cover.png"];

// GET DATA
const { getSliders } = useHomePage();

const {
  data: sliders,
  error,
  status,
} = useAsyncData("sliders", () => getSliders());

// Set up Embla Carousel and state for dot navigation
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false });
const selectedIndex = ref(0); // Tracks the currently selected slide
const scrollSnaps = ref([]); // Holds the scroll snaps (positions)

// Function to scroll to a specific slide
const onDotButtonClick = (index: number) => {
  if (emblaApi.value) emblaApi.value.scrollTo(index);
};

// Initialize scroll snap positions and handle slide selection
const onInit = (api: any) => {
  scrollSnaps.value = api.scrollSnapList();
};

const onSelect = (api: any) => {
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
  border: 2px solid rgb(114, 106, 106);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.dot-button.active {
  background-color: rgb(28, 29, 27);
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
    transform: translateY(-100%);
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
