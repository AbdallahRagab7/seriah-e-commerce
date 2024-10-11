<template>
  <div class="myContainer pt-[60px]">
    <h1 class="heading1 mb-8 text-center">Collections</h1>

    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-10 2xl:gap-14">
      <div
        v-for="collection in collections"
        :key="collection"
        class="shadow-md rounded-md overflow-hidden max-sm:px-8"
      >
        <NuxtLink to="/collection/1">
          <NuxtImg
            :src="collection.img"
            alt="collection Image"
            class="w-full h-[200px] object-cover"
          />
          <h2
            class="text-[20px] font-poppins text-center p-5 text-[#201f1f] font-medium hover:text-primary"
          >
            {{ collection.title }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const collections = [
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
