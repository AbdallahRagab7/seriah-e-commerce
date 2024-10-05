<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section class="space-y-6">
        <NuxtImg
          :src="activeImage"
          alt="Product"
          class="w-full rounded-md shadow-md object-cover"
        />
        <div class="flex flex-wrap gap-5">
          <NuxtImg
            v-for="image in productImages"
            :key="image"
            :src="image"
            @click="activeImage = image"
            alt="ProductImage"
            class="w-1/6 h-full cursor-pointer object-contain rounded-md shadow-md"
            :class="activeImage === image ? 'border-2 border-green-500' : ''"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">
          Men's Regular T-shirt
          <span class="text-green-500 text-sm font-normal">In Stock</span>
        </h1>
        <div class="mt-8 space-y-4">
          <p class="text-gray-700">
            {{ description.substring(0, 200) }}
          </p>
        </div>

        <div class="flex items-center space-x-4 text-gray-500">
          <span class="text-lg line-through">$50.00</span>
          <span class="text-lg text-black">$35.00</span>
        </div>
        <div class="flex items-center space-x-2">
          <label for="quantity" class="text-gray-600 font-semibold"
            >Quantity:</label
          >
          <div class="flex items-center">
            <button
              type="button"
              class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >
              <Icon
                name="iconamoon:sign-minus-bold"
                class="w-4 h-4 text-black"
                @click="decreaseCounter"
              />
              <span class="mx-2 text-sm">{{ quantityCounter }}</span>

              <Icon
                name="iconamoon:sign-plus-fill"
                class="w-4 h-4 text-black"
                @click="quantityCounter++"
              />
            </button>
          </div>
        </div>

        <div class="space-y-2">
          <h2 class="text-md font-semibold">Select Size</h2>
          <div class="relative">
            <select
              class="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
            >
              <option value="">- Please select -</option>
              <option :value="size" v-for="size in sizes" :key="size">
                {{ size }}
              </option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <Icon name="iconamoon:arrow-down-2-thin " class="text-2xl" />
            </div>
          </div>
        </div>

        <!-- Select Color Dropdown -->
        <div class="space-y-2">
          <label class="text-md font-semibold">Select Color</label>
          <div class="relative">
            <select
              id="color"
              class="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
            >
              <option value="">- Please select -</option>
              <option :value="color" v-for="color in colors" :key="color">
                {{ color }}
              </option>
              <Icon name="iconamoon:arrow-down-2-thin " class="text-2xl" />
            </select>

            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <!-- <Icon name="iconamoon:arrow-down-2-thin " class="text-2xl" /> -->
              <Icon name="iconamoon:arrow-down-2-thin" class="text-2xl" />
            </div>
          </div>
        </div>
        <BaseButton
          class="w-full py-3 text-white rounded-md flex items-center justify-center gap-2"
        >
          <Icon name="bi:cart" class="text-2xl" /> Add to Cart
        </BaseButton>
      </section>
    </div>

    <div class="mt-8 space-y-4 max-w-[80%] md:max-w-[50%]">
      <h2 class="text-xl font-semibold">Description</h2>
      <p class="text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const productImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
];
const description = `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non erat
quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod quis. Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Morbi non erat quam.
Vestibulum aliquam nibh dui, et aliquet nibh euismod quis. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Morbi non erat quam.
Vestibulum aliquam nibh dui, et aliquet nibh euismod quis. Vestibulum
aliquam nibh dui, et aliquet nibh euismod quis. Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Morbi non erat quam. Vestibulum
aliquam nibh dui, et aliquet nibh euismod quis.`;

const colors = ["Red", "Green", "Blue", "Gray"];
const sizes = ["Small", "Medium", "Large", "X Large"];

const activeImage = ref<string>(productImages[0]);
const quantityCounter = ref<number>(1);
const decreaseCounter = () => {
  if (quantityCounter.value > 1) {
    quantityCounter.value--;
  }
};
</script>
