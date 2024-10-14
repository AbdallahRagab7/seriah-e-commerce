<template>
  <div class="myContainer pt-[60px]">
    <h1 class="heading1 mb-8 text-center">Collections</h1>
    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-10 2xl:gap-14">
      <div
        v-for="collection in collections"
        :key="collection.id"
        class="shadow-sm rounded-sm overflow-hidden max-sm:px-8"
      >
        <NuxtLink to="/collection/1">
          <NuxtImg
            :src="`${$config.public.STRAPI_URL}${collection.attributes?.background?.data?.attributes?.url}`"
            alt="collection Image"
            class="w-full h-[200px] object-cover"
            placeholder
          />
          <h2
            class="text-[20px] font-poppins text-center p-5 text-[#201f1f] font-medium hover:text-primary"
          >
            {{ collection.attributes.title }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getCollections } = useHomePage();

const { data: collections, error } = useAsyncData("collections", () =>
  getCollections()
);
</script>
