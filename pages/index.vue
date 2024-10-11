<template>
  <div>
    <HomeSlider />
    <HomeMisson :HomeMission="home?.attributes.mission" />
    <HomeCollections />
    <HomeProducts />
    <HomeSubscribe />

    <!-- HTML -->
  </div>
</template>

<script setup lang="ts">
const { getHome } = useHomePage();

const { data: home, error } = useAsyncData("home-page", () => getHome());
</script>
