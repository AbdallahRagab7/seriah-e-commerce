<template>
  <div class="container py-[60px] mb-10">
    <h1 class="my-8 heading1 text-center">Products</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <section class="grid md:grid-cols-7 gap-3">
      <div class="md:col-span-2 xl:max-w-[95%]">
        <ProductsFilter />
      </div>

      <div
        class="md:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
      >
        <ProductCard v-for="i in 6" :key="i" />
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) and (max-width: 1125px) {
  .container {
    max-width: 99%;
  }
}
@media (min-width: 1023px) and (max-width: 1056px) {
  :deep(.custom-btn) {
    padding: 1.2px;
    padding-top: 4px;
  }
}
</style>
