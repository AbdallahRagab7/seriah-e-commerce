<template>
  <div class="myContainer py-[65px]">
    <h1 class="heading1 mb-8 text-center">Collections</h1>
    <!-- <div class="grid xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14"> -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 2xl:gap-14">
      <div
        v-for="collection in collections"
        :key="collection.id"
        class="rounded-sm overflow-hidden border max-sm:max-h-[250px]"
      >
        <NuxtLink :to="`/collection/${collection.id}`">
          <NuxtImg
            :src="`${$config.public.STRAPI_URL}${collection.attributes?.background?.data?.attributes?.url}`"
            alt="collection Image"
            class="w-full h-[200px] max-sm:max-h-[130px] object-cover"
            placeholder
          />
          <h2
            class="text-[18px] max-sm:text-sm font-poppins text-center p-4 text-[#201f1f] font-medium hover:text-primary"
          >
            {{ collection.attributes.title }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getCollections } = useCollections();

const { data: collections, error } = useAsyncData("collections", () =>
  getCollections()
);
</script>
