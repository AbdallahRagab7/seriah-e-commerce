<template>
  <Title>Products</Title>
  <div class="myContainer py-[60px] mb-10">
    <h1 class="my-8 heading1 text-center">Products</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <section class="grid md:grid-cols-7 gap-3">
      <div class="md:col-span-2 xl:max-w-[90%]">
        <ProductsFilter @filter="setFilter" />
      </div>

      <div
        v-if="status === 'pending'"
        class="md:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8"
      >
        <ProductSkeleton v-for="i in 6" :key="i" />
      </div>

      <div
        v-else-if="products?.data?.length === 0"
        class="md:col-span-5 grid place-items-center max-md:my-24"
      >
        <h1 class="text-2xl text-center">No Products Found</h1>
      </div>

      <div
        v-else
        class="md:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 max-sm:px-6"
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

<script setup lang="ts">
const { getProducts } = useProducts();

const pageSize = ref(10);
const pageNumber = ref(1);

const pagination = computed(() => {
  return {
    page: pageNumber.value,
    pageSize: pageSize.value,
  };
});

const onRowsPerPageChange = (value: any) => {
  pageSize.value = value; // Update rows per page
};

const onPageChange = (event: any) => {
  pageNumber.value = event.page + 1;
};

// Filter Products
const myFilters = ref({});
const setFilter = (filters: any) => {
  myFilters.value = filters;
};

const {
  data: products,
  error,
  status,
} = useAsyncData(
  "products",
  () => getProducts(pagination.value, myFilters.value),
  {
    watch: [pagination, myFilters],
  }
);
</script>

<style scoped>
@media (min-width: 1023px) and (max-width: 1156px) {
  :deep(.add-cart) {
    padding: 0.05px !important;
    font-size: 10px !important;
  }
}
</style>
