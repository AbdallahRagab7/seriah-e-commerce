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
        v-if="status === 'pending'"
        class="md:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8"
      >
        <ProductSkeleton v-for="i in 6" :key="i" />
      </div>

      <div
        v-else
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

    <div class="w-full md:w-[75%] ml-auto mt-8">
      <!-- :totalRecords="products?.meta?.pagination?.total" -->
      <Paginator
        :rows="pageSize"
        :totalRecords="products?.meta?.pagination?.total"
        :rowsPerPageOptions="[5, 10, 20, 30]"
        @update:rows="onRowsPerPageChange"
        @page="onPageChange"
      ></Paginator>
    </div>
  </div>
</template>

<script setup>
const { getProducts } = useProducts();

const pageSize = ref(10);
const pageNumber = ref(1);

const pagination = computed(() => {
  return {
    page: pageNumber.value,
    pageSize: pageSize.value,
  };
});

const onRowsPerPageChange = (value) => {
  pageSize.value = value; // Update rows per page
};

const onPageChange = (event) => {
  pageNumber.value = event.page + 1;
  // be aware when page size changes pageNumber in event object will be change
  // sa3tha rkm el page hyb2a rakm el page el mokabl lly kont fih fi page size el 2dem
  // y3ny lw kont fi page 3 , page size now 10
  // 5let page size 5 yb2a hyro7 3la page 9
};

const {
  data: products,
  error,
  status,
} = useAsyncData("products", () => getProducts(pagination.value), {
  watch: [pagination],
});
</script>

<style scoped>
@media (min-width: 1023px) and (max-width: 1156px) {
  :deep(.add-cart) {
    padding: 0.05px !important;
    font-size: 10px !important;
  }
}
</style>
