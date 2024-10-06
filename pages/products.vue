<template>
  <div class="container mb-10">
    <h1 class="my-8 heading1 text-center">Products</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <section class="grid md:grid-cols-4 gap-3 px-5">
      <div class="space-y-5">
        <p class="text-xl font-poppins font-medium">Product Categories</p>

        <ul class="space-y-3">
          <li
            v-for="(category, index) in categories"
            :key="category.title"
            class="text-gray-900 transition-all duration-300 ease-in-out"
          >
            <p
              @click="toggleCategory(index, category.title)"
              class="flex items-center mb-2 justify-between text-lg cursor-pointer hover:text-primary"
            >
              {{ category.title }}
              <span>
                <Icon
                  name="fe:arrow-right"
                  class="text-xl text-gray-500"
                  :class="
                    categories[index][category.title] ? 'rotate-90' : 'rotate-0'
                  "
                />
              </span>
            </p>

            <div
              class="mb-2 px-5 overflow-hidden transition-all duration-500 ease-in-out"
              :class="
                categories[index][category.title] ? 'max-h-72' : 'max-h-0 '
              "
            >
              <p
                v-for="subCategory in category.subCategories"
                :key="subCategory"
                class="mb-2 hover:text-primary cursor-pointer capitalize"
              >
                {{ subCategory }}
              </p>
            </div>
          </li>
        </ul>

        <div class="flex flex-col items-start">
          <label for="price-range" class="mb-2 text-xl font-poppins font-medium"
            >Filter By Price</label
          >
          <input
            id="price-range"
            type="range"
            min="0"
            max="100"
            v-model="price"
            class="w-full mb-2"
          />
          <p>Price : $0 - $500</p>
        </div>
      </div>

      <div class="md:col-span-3 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        <ProductCard v-for="i in 6" :key="i" />
      </div>
    </section>
  </div>
</template>

<script setup>
const categories = reactive([
  {
    title: "Lighting & chair",
    subCategories: ["Lighting", "Chair"],
  },
  {
    title: "Fashion for men’s",
    subCategories: ["Decoration", "Accessories", "Decoration"],
  },
  {
    title: "Lighting & chair",
    subCategories: ["clothing", "Chair", "Oil"],
  },
]);

const toggleCategory = (index, identefier) => {
  if (categories[index][identefier]) {
    categories[index][identefier] = false;
  } else {
    categories[index][identefier] = true;
  }
};
</script>

<style scoped></style>
