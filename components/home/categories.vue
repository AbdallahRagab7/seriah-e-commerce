<template>
  <div class="container">
    <h1 class="heading1 mb-8 text-center">Categories</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-10 2xl:gap-14">
      <div
        v-for="category in categories"
        :key="category"
        class="shadow-md rounded-md overflow-hidden"
      >
        <NuxtImg
          :src="category.img"
          alt="Category Image"
          class="w-full h-[200px] object-cover"
        />
        <h1 class="text-xl font-poppins text-center p-5 text-black">
          {{ category.title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    title: "Men's Clothing",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Women's Clothing",
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Jewelery",
    img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Electronics",
    img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
</script>
