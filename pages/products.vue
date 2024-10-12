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
    <h1>{{ componentPaginationObject }} component pagination object</h1>
    <h1>{{ currentPage }}</h1>
    <h1>{{ pageSize }} rows per page</h1>

    <h1>{{ pageNumber }} page number</h1>
    <h1>{{ pagination }} my Pagination Object</h1>

    <div class="w-full md:w-[75%] ml-auto mt-8">
      <!-- :totalRecords="products?.meta?.pagination?.total" -->
      <Paginator
        :rows="pageSize"
        :first="currentPage"
        :totalRecords="60"
        :rowsPerPageOptions="[5, 10, 20, 30]"
        @update:rows="onRowsPerPageChange"
        @page="onPageChange"
      ></Paginator>
    </div>
  </div>
</template>

<script setup>
const { getProducts } = useProducts();
const componentPaginationObject = ref({});

const pageSize = ref(10);
const pageNumber = ref(1);
const currentPage = ref(0);
// current page btt7sb 3la 7sb el page size
// setTimeout(() => {
//   currentPage.value = 1;
// }, 4000);

const pagination = computed(() => {
  return {
    pageNumber: pageNumber.value,
    pageSize: pageSize.value,
  };
});

const onRowsPerPageChange = (value) => {
  pageSize.value = value; // Update rows per page
  currentPage.value = 0; // reset to first page
  pageNumber.value = 1; // Reset to the first page
};

const onPageChange = (event) => {
  componentPaginationObject.value = event; // Update the current page
  // +1 because default page is 0 in component
  pageNumber.value = event.page + 1;
  // Update my pagination object
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
