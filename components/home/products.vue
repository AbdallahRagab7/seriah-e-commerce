<template>
  <div class="myContainer py-[60px]">
    <h1 class="my-10 heading1 text-center hover:text-primary">
      <NuxtLink to="/products"> Products </NuxtLink>
    </h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-3 lg:gap-8 max-sm:px-6"
    >
      <ProductCard
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
  is_featured: {
    $eq: true,
  },
};

const {
  data: products,
  error,
  status,
} = useAsyncData("isFeaturedProducts", () => getProducts({}, filters));
</script>

<style scoped>
@media (min-width: 1023px) and (max-width: 1156px) {
  :deep(.add-cart) {
    padding: 0.05px !important;
    font-size: 10px !important;
  }
}
</style>
