<template>
  <div class="relative max-h-[300px]">
    <NuxtLink :to="`/product/${product?.id}`" class="group">
      <div class="overflow-hidden">
        <NuxtImg
          :src="`${$config.public.STRAPI_URL}${product?.attributes?.main_image?.data?.attributes?.url}`"
          alt="product image"
          class="w-full aspect-[310/149] object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </NuxtLink>

    <div class="absolute top-1/4 left-[5%]">
      <h4>
        <NuxtLink
          :to="`/product/${product?.id}`"
          class="font-medium hover:text-primary"
        >
          {{ product?.attributes?.name }}
        </NuxtLink>
      </h4>

      <NuxtLink :to="`/product/${product?.id}`">
        <button
          class="text-[#323232] hover:text-primary flex items-center justify-center text-[13px] font-semibold mt-5 bg-transparent border-2 py-3 px-8 border-[#323232]"
        >
          Buy Now /
          <span class="mx-1 text-[10px] font-medium">EGP</span>
          {{ product?.attributes?.price }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: {
    attributes: IProduct;
    id: number;
  };
}

const props = defineProps<Props>();
</script>
