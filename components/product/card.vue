<template>
  <div
    class="w-full max-w-sm mx-auto border border-gray-100 rounded-sm max-sm:px-5"
  >
    <NuxtLink :to="`product/${product?.id}`">
      <div class="overflow-hidden !rounded-md">
        <NuxtImg
          class="max-h-[90%] max-w-[90%] rounded-md my-5 object-contain mix-blend-multiply mx-auto"
          :src="`${$config.public.STRAPI_URL}${product?.attributes?.main_image?.data?.attributes?.url}`"
          alt="product image"
        />
      </div>
    </NuxtLink>

    <div class="px-5 pb-5">
      <NuxtLink :to="`product/${product?.id}`">
        <!-- font-poppins -->
        <h5
          class="text-base mb-5 text-customSlate hover:text-primary line-clamp-4"
        >
          {{ product?.attributes?.name }}
        </h5>
      </NuxtLink>

      <div class="flex items-center justify-between">
        <div class="text-lg text-gray-900">
          <span class="text-[11px] text-black font-medium"> EGP </span>

          <span class="text-sm text-black font-medium">
            {{ product?.attributes?.price }}</span
          >

          <span class="sale mx-1 text-xs line-through text-customSlate">
            {{ product?.attributes?.sale_price }}
          </span>
        </div>

        <a
          href="#"
          class="add-cart text-[bc8246] relative text-[13px] font-medium hover:text-primary"
          >+ Add to Cart</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: IProduct;
}

const props = defineProps<Props>();
</script>

<style scoped>
/* .custom-btn {
  position: relative;
  background: transparent;
  color: var(--secondary-color);
  border-color: var(--secondary-color);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}

.custom-btn:hover {
  color: white;
}

.custom-btn::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  background: #201f1f;
  transition: 0.5s;
  z-index: -1;
}
.custom-btn:hover::before {
  width: 100%;
} */

.add-cart:after {
  background: #201f1f;
  bottom: -2px;
  content: "";
  height: 1px;
  left: 5px;
  position: absolute;
  width: 95%;
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
