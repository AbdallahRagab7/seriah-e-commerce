<template>
  <section class="space-y-10">
    <ul class="space-y-4">
      <p class="text-xl font-poppins font-medium">Product Categories</p>
      <li
        v-for="category in categories"
        :key="category.id"
        class="text-gray-900 transition-all duration-300 ease-in-out"
        @click="setActiveCategory(category.id)"
      >
        <p
          class="flex items-center justify-between text-base cursor-pointer capitalize hover:text-primary"
          :class="activeCategory === category.id ? 'text-primary' : ''"
        >
          {{ category?.attributes?.title }}
        </p>
      </li>
    </ul>

    <div class="flex flex-col items-start">
      <label for="price-range" class="mb-2 text-lg font-poppins font-medium"
        >Filter By Price</label
      >

      <Slider
        v-model="priceRange"
        range
        :max="1000"
        :step="10"
        class="w-full mb-5 mt-3 !bg-red-50"
      />

      <p class="text-slate-800 text-base">
        Price :
        <span class="currency !text-[10px] !text-slate-500">EGP</span>
        {{ priceRange[0] }} -
        <span class="currency !text-[10px !text-slate-500">EGP</span>
        {{ priceRange[1] }}
      </p>
    </div>

    <div class="flex items-center justify-center gap-3 !mt-8">
      <BaseButton
        @click="filterProducts"
        class="text-sm py-2.5 w-full font-semibold tracking-wide rounded-sm"
        >Filter</BaseButton
      >
      <BaseButton
        @click="resetFilter"
        class="w-full text-sm !bg-transparent hover:!bg-secondary hover:!text-white !text-secondary border border-secondary py-2.5 font-semibold tracking-wide rounded-sm"
        >Reset Filter</BaseButton
      >
    </div>
  </section>
</template>

<script setup lang="ts">
const { getCategories } = useProducts();

const { data: categories, error } = await useAsyncData("categories", () =>
  getCategories()
);

const emit = defineEmits(["filter"]);

const activeCategory = ref(null);
const priceRange = ref([0, 0]);

const setActiveCategory = (id: any) => {
  activeCategory.value = id;
};

const filters = computed(() => {
  let filters = {
    price: {
      $gte: priceRange.value[0],
      $lte: priceRange.value[1],
    },
    category: {
      id: {
        $eq: activeCategory.value,
      },
    },
  };
  if (!activeCategory.value) delete filters.category;
  if (priceRange.value[0] === 0 && priceRange.value[1] === 0)
    delete filters.price;
  return filters;
});

const filterProducts = () => {
  emit("filter", filters.value);
};

const resetFilter = () => {
  activeCategory.value = null;
  priceRange.value = [0, 0];
  emit("filter", {});
};
</script>
