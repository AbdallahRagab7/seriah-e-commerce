<template>
  <div class="myContainer py-[60px] mb-10">
    <h1 class="my-8 heading1 text-center">Products</h1>
    <!-- {{ products }} -->

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <section class="grid md:grid-cols-7 gap-3">
      <div class="md:col-span-2 xl:max-w-[90%]">
        <ProductsFilter />
      </div>

      <div
        class="md:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8"
      >
        <ProductCard
          v-for="product in products?.data"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
    <!-- dh tmam -->
    <h1>{{ rowsPerPage }}</h1>

    <h1>{{ currentPage }}</h1>

    <div class="w-full md:w-[75%] ml-auto mt-8">
      <Paginator
        :rows="rowsPerPage"
        :totalRecords="products?.meta?.pagination?.total"
        :rowsPerPageOptions="[10, 20, 30]"
        @update:rows="onRowsPerPageChange"
        @page="onPageChange"
      ></Paginator>
    </div>
  </div>
</template>

<script setup>
const { getProducts } = useProducts();
const rowsPerPage = ref(10); // Default rows per page
const currentPage = ref(0); // Current page state

const onRowsPerPageChange = (value) => {
  rowsPerPage.value = value; // Update rows per page
  currentPage.value = 0; // Reset to the first page
};

// Event handler when the page changes
const onPageChange = (event) => {
  currentPage.value = event.page; // Update the current page
};

const {
  data: products,
  error,
  status,
} = useAsyncData("products", () => getProducts());
</script>

<style scoped>
@media (min-width: 1023px) and (max-width: 1156px) {
  :deep(.add-cart) {
    padding: 0.05px !important;
    font-size: 10px !important;
  }
}
</style>
