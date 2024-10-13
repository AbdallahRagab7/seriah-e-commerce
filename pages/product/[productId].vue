<template>
  <div class="myContainer mx-auto px-4 py-[65px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9">
      <section class="space-y-6">
        <NuxtImg
          alt="Product"
          class="w-full rounded-md shadow-md object-cover"
          :src="`${$config.public.STRAPI_URL}${activeImage}`"
        />
        <div class="flex flex-wrap gap-5">
          <NuxtImg
            v-for="image in productImages"
            :key="image"
            :src="`${$config.public.STRAPI_URL}${image}`"
            @click="activeImage = image"
            alt="ProductImage"
            class="w-1/6 h-full cursor-pointer object-contain rounded-md shadow-md"
            :class="activeImage === image ? 'border-2 border-green-500' : ''"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h1 class="text-2xl font-medium text-customGray">
          {{ product?.data.attributes.name }}

          <span
            class="text-green-500 inline-flex items-center gap-[2px] text-xs font-normal"
          >
            In Stock
            <Icon name="carbon:checkmark-filled" style="color: #0da032" />
          </span>
        </h1>
        <div class="mt-8 space-y-4">
          <p class="text-customSlate text-sm">
            {{ product?.data.attributes.short_description }}
          </p>
        </div>

        <div class="flex items-center space-x-4 text-gray-500">
          <span class="text-xs">
            <!-- sale price -->
            <span class="currency mr-1">EGP</span>
            <span class="line-through">
              {{ product?.data.attributes.sale_price }}
            </span>
          </span>
          <!-- current price -->
          <span class="text-base text-black"
            ><span class="currency mr-1">EGP</span
            >{{ product?.data.attributes.price }}</span
          >
        </div>
        <div class="flex items-center space-x-2">
          <label for="quantity" class="text-customSlate text-sm"
            >Quantity:</label
          >
          <div class="flex items-center">
            <button
              type="button"
              class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >
              <Icon
                name="iconamoon:sign-minus-bold"
                class="w-3 h-3 text-black"
                @click="decreaseCounter"
              />
              <span class="mx-2 text-sm">{{ quantityCounter }}</span>

              <Icon
                name="iconamoon:sign-plus-fill"
                class="w-3 h-3 text-black"
                @click="quantityCounter++"
              />
            </button>
          </div>
        </div>

        <div class="space-y-2">
          <h2 class="customLabel">
            Select Size <span class="text-red-600">*</span>
          </h2>
          <div class="relative">
            <select
              class="block appearance-none w-full border border-gray-300 text-customSlate text-sm py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
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
          <label class="customLabel"
            >Select Color <span class="text-red-600">*</span></label
          >
          <div class="relative">
            <select
              id="color"
              class="block appearance-none w-full border border-gray-300 text-customSlate text-sm py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
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
              <Icon name="iconamoon:arrow-down-2-thin" class="text-2xl" />
            </div>
          </div>
        </div>
        <!-- End of color -->
        <BaseButton
          class="w-full py-3 text-white rounded-md flex items-center justify-center"
        >
          <Icon name="iconamoon:sign-plus" /> Add to Cart
        </BaseButton>
      </section>
    </div>

    <div class="mt-8 space-y-4 max-w-[80%] md:max-w-[50%]">
      <h2 class="text-xl font-semibold">Description</h2>
      <p class="text-customSlate text-sm">
        {{ product?.data.attributes.long_decription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const colors = ["Red", "Green", "Blue", "Gray"];
const sizes = ["Small", "Medium", "Large", "X Large"];

const route = useRoute();
const { getProduct } = useProducts();

const { data: product, error } = await useAsyncData("product", () =>
  getProduct(route.params.productId as any)
);

const productImages = computed(() => {
  const main_image =
    product?.value?.data?.attributes?.main_image?.data?.attributes?.url;
  let images = product?.value?.data?.attributes?.images?.data || [];

  images = images.map((image: any) => image.attributes.url) || [];
  return [main_image, ...images];
});

const activeImage = ref<string>(productImages.value[0]);

const quantityCounter = ref<number>(1);
const decreaseCounter = () => {
  if (quantityCounter.value > 1) {
    quantityCounter.value--;
  }
};
</script>
