<template>
  <div class="px-10 py-[60px] mb-10">
    <h1 class="mb-10 heading1 text-center hover:text-primary">
      <NuxtLink to="/products"> Best Sale </NuxtLink>
    </h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div class="grid md:grid-cols-2 gap-7">
      <ProductAdCard
        v-for="product in products?.data"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { getProducts } = useProducts();

const filters = {
  show_ad: {
    $eq: true,
  },
};

const {
  data: products,
  error,
  status,
} = useAsyncData("adsProducts", () => getProducts({}, filters));
</script>

<style scoped>
@media (min-width: 1023px) and (max-width: 1156px) {
  :deep(.add-cart) {
    padding: 0.05px !important;
    font-size: 10px !important;
  }
}
</style>
