<template>
  <div class="relative p-2">
    <!-- Embla Carousel -->
    <div class="embla max-h-[500px]" ref="emblaRef">
      <div class="embla__container">
        <div
          v-for="slider in sliders"
          :key="slider.id"
          class="embla__slide p-5 relative"
        >
          <NuxtImg
            :src="slider.attributes?.image?.data?.attributes?.url"
            alt="Slider Image"
            placeholer
            class="object-contain w-full rounded-sm"
          />

          <div class="w-full absolute top-[30%] left-[10%] max-w-[400px]">
            <h1
              class="animated-heading !mb-[14px] text-stroke lg:text-[36px] !text-[#32323] sm:text-3xl font-semibold md:mb-2"
            >
              {{ slider.attributes.title }}
            </h1>
            <p class="text-[#32323] text-sm mb-6">
              {{ slider.attributes.description }}
            </p>

            <NuxtLink
              :to="slider.attributes.buttonUrl"
              class="animated-btn custom-btn w-[160px] mt-2 text-[12px] sm:text-base font-semibold rounded-sm p-2 md:p-3"
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

const fakeSliders = [
  {
    image: {
      data: {
        id: 1,
        attributes: {
          name: "Image 1",
          alternativeText: "An image of the first slider.",
          url: "/cover3.png", // Replace with your image URL
        },
      },
    },
    title: "First Slider",
    description: "This is the description for the first slider.",
    buttonLabel: "Learn More",
    buttonUrl: "https://example.com/first",
  },
  {
    image: {
      data: {
        id: 1,
        attributes: {
          name: "Image 1",
          alternativeText: "An image of the first slider.",
          url: "/cover.png", // Replace with your image URL
        },
      },
    }, // Replace with your image URL
    title: "Second Slider",
    description: "This is the description for the second slider.",
    buttonLabel: "Discover More",
    buttonUrl: "https://example.com/second",
  },
  {
    image: {
      data: {
        id: 1,
        attributes: {
          name: "Image 1",
          alternativeText: "An image of the first slider.",
          url: "/cover.png", // Replace with your image URL
        },
      },
    }, // Replace with your image URL
    title: "Third Slider",
    description: "This is the description for the third slider.",
    buttonLabel: "Get Started",
    buttonUrl: "https://example.com/third",
  },
  {
    image: {
      data: {
        id: 1,
        attributes: {
          name: "Image 1",
          alternativeText: "An image of the first slider.",
          url: "/cover.png", // Replace with your image URL
        },
      },
    }, // Replace with your image URL
    title: "Third Slider",
    description: "This is the description for the fourth slider.",
    buttonLabel: "Get Started",
    buttonUrl: "https://example.com/third",
  },
];

// GET DATA
const { getSliders } = useHomePage();

const { data: sliders, error } = useAsyncData("sliders", () => getSliders());

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
  border: 2px solid white;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.dot-button.active {
  background-color: white;
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
