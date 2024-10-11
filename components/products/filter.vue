<template>
  <section class="space-y-10">
    <ul class="space-y-4">
      <p class="text-xl font-poppins font-medium">Product Categories</p>

      <li
        v-for="(category, index) in categories"
        :key="category.title"
        class="text-gray-900 transition-all duration-300 ease-in-out"
      >
        <p
          @click="toggleCategory(index, category.title)"
          class="flex items-center justify-between text-base cursor-pointer hover:text-primary"
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
          :class="categories[index][category.title] ? 'max-h-72' : 'max-h-0 '"
        >
          <p
            v-for="subCategory in category.subCategories"
            :key="subCategory"
            class="my-2 hover:text-primary cursor-pointer capitalize"
          >
            {{ subCategory }}
          </p>
        </div>
      </li>
    </ul>

    <div class="flex flex-col items-start">
      <label for="price-range" class="mb-2 text-lg font-poppins font-medium"
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
      <p class="text-slate-500 text-base">Price : $0 - $500</p>
    </div>
    <div class="flex flex-col items-start">
      <label for="price-range" class="mb-2 text-lg font-poppins font-medium"
        >Any Size</label
      >
      <select
        class="w-full border border-gray-300 text-customSlate text-sm py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
      >
        <option value="">- Please select -</option>
        <option :value="size" v-for="size in sizes" :key="size">
          {{ size }}
        </option>
      </select>
    </div>

    <div class="flex flex-col items-start">
      <label for="price-range" class="mb-2 text-lg font-poppins font-medium"
        >Any Color</label
      >
      <select
        class="w-full border border-gray-300 text-customSlate text-sm py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
      >
        <option value="">- Please select -</option>
        <option :value="size" v-for="color in colors" :key="color">
          {{ color }}
        </option>
      </select>
    </div>

    <div class="flex items-center justify-center gap-3 !mt-8">
      <BaseButton
        class="text-sm py-2.5 w-full font-semibold tracking-wide rounded-lg"
        >Filter</BaseButton
      >
      <BaseButton
        class="w-full text-sm !bg-transparent hover:!bg-secondary hover:!text-white !text-secondary border border-secondary py-2.5 font-semibold tracking-wide rounded-lg"
        >Reset Filter</BaseButton
      >
    </div>
  </section>
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
const colors = ["Red", "Green", "Blue", "Gray"];
const sizes = ["Small", "Medium", "Large", "X Large"];

const toggleCategory = (index, identefier) => {
  if (categories[index][identefier]) {
    categories[index][identefier] = false;
  } else {
    categories[index][identefier] = true;
  }
};
</script>
