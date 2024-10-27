<template>
  <div
    class="relative w-full max-w-sm mx-auto border border-gray-100 rounded-sm max-sm:px-6"
  >
    <div
      v-if="product?.attributes?.sale_price != product?.attributes?.price"
      class="absolute top-[-19px] left-0 rounded-sm"
    >
      <div
        class="bg-red-500 text-[9.5px] rounded-sm text-white text-xs w-[65px] py-[2px] text-center !z-10"
      >
        Sale
        {{
          Math.floor(
            ((product?.attributes?.sale_price - product?.attributes?.price) /
              product?.attributes?.price) *
              100
          )
        }}%
      </div>
    </div>
    <NuxtLink :to="`/product/${product?.id}`">
      <div class="overflow-hidden">
        <NuxtImg
          class="mb-5 object-cover mix-blend-multiply"
          :src="`${$config.public.STRAPI_URL}${product?.attributes?.main_image?.data?.attributes?.url}`"
          alt="product image"
        />
      </div>
    </NuxtLink>

    <div class="px-5 pb-5">
      <NuxtLink :to="`/product/${product?.id}`">
        <!-- font-poppins -->
        <h5
          class="text-[15px] mb-3 text-customSlate hover:text-primary line-clamp-3"
        >
          {{ product?.attributes?.name }}
        </h5>
      </NuxtLink>

      <div class="flex items-center justify-between">
        <div class="text-lg text-gray-900">
          <span class="text-[11px] text-black font-medium"> EGP </span>
          <!-- price after sale -->
          <span class="text-[15px] text-black font-medium">
            {{
              product?.attributes?.sale_price != product?.attributes?.price
                ? product?.attributes?.sale_price
                : product?.attributes?.price
            }}</span
          >
          <!-- price before sale (original price)  -->
          <span
            v-if="product?.attributes?.sale_price != product?.attributes?.price"
            class="sale mx-1 text-[13px] line-through text-customSlate"
          >
            {{ product?.attributes?.price }}
          </span>
        </div>
        <NuxtLink :to="`/product/${product?.id}`">
          <button
            class="add-cart text-[bc8246] relative text-[13px] font-medium hover:text-primary"
          >
            Buy Now
          </button>
        </NuxtLink>
      </div>
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

<style scoped>
.add-cart:after {
  background: #201f1f;
  bottom: -2px;
  content: "";
  height: 1px;
  left: 1px;
  position: absolute;
  width: 100%;
  transition: all 0.3s ease-out 0s;
}

.add-cart:hover {
  /* color: #bc8246; */
  color: var(--primary-color);
}

.add-cart:hover:after {
  /* background-color: #bc8246; */
  background-color: var(--primary-color);
}
</style>
