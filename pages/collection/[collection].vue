<template>
  <div class="myContainer py-[60px] mb-10">
    <h1 class="my-10 heading1 text-center">Collection Title</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <section class="grid md:grid-cols-7 gap-3">
      <div class="md:col-span-2 xl:max-w-[90%]">
        <ProductsFilter />
      </div>

      <div
        class="md:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8"
      >
        <ProductCard
          v-for="product in products?.data.slice(0, 8)"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getProducts } = useProducts();

const {
  data: products,
  error,
  status,
} = useAsyncData("products", () => getProducts());
</script>

<style scoped>
@media (min-width: 1023px) and (max-width: 1156px) {
  :deep(.add-cart) {
    padding: 0px !important;
    font-size: 10px !important;
  }
}
</style>
