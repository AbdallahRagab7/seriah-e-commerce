<template>
  <div class="container py-[60px] mb-10">
    <h1 class="my-8 heading1 text-center">Products</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 xl:gap-14"
    >
      <ProductCard v-for="i in 6" :key="i" />
    </div>
  </div>
</template>
