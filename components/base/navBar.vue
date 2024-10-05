<template>
  <nav
    class="bg-[#ffff] p-4 flex justify-between items-center shadow-md relative w-full"
  >
    <div class="ms-5">
      <NuxtLink to="/">
        <NuxtImg src="/edited-logo.png" class="h-10 object-cover" />
      </NuxtLink>
    </div>

    <div class="flex items-center gap-2">
      <NuxtLink to="/cart">
        <div class="flex items-center gap-2 md:hidden">
          <Icon name="ph:bag-light" class="text-3xl" />
          Cart ( 0 )
        </div>
      </NuxtLink>

      <button
        @click="open = !open"
        class="text-3xl flex items-center md:hidden"
      >
        <!-- <ion-icon :name="open ? 'close' : 'menu'"></ion-icon>
        -->
        <Icon name="mingcute:menu-fill" v-if="open === false" />
        <Icon name="ic:baseline-close" v-else />
      </button>
    </div>

    <!-- to close the sidebar when click bra el navbar -->
    <div
      v-if="open"
      class="overlay fixed w-screen h-full top-0 bg-black bg-opacity-50 z-40"
      :class="open ? 'bg-black bg-opacity-50' : ''"
      @click="open = false"
    ></div>

    <!-- SideBar -->
    <aside
      :class="open ? 'left-0' : 'left-[-100%] '"
      class="flex items-center z-50 bg-white max-md:items-start md:justify-between md:flex-row flex-col w-[62%] sm:w-[55%] md:w-[60%] max-md:fixed top-0 left-0 h-full transition-[left] duration-500 ease-in"
    >
      <div class="md:hidden p-3 w-full mb-5 border-b-[1px] border-gray-200">
        <!-- <a href="#" class="font-bold italic font-sans text-xl">RAGAB</a> -->
        <NuxtImg src="/edited-logo.png" class="h-10 object-cover" />
      </div>

      <ul class="flex gap-5 max-md:flex-col">
        <li v-for="route in routes" :key="route.name" class="max-md:ml-8">
          <NuxtLink :to="route.link" class="hover:text-primary text-[18px]">
            {{ route.name }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <NuxtLink to="/cart">
          <div class="flex items-center gap-1 hidden md:flex">
            <Icon name="ph:bag-light" class="text-3xl" />
            <span class="mt-1"> Cart ( 0 ) </span>
          </div>
        </NuxtLink>

        <!-- <button
          class="bg-transparent hover:bg-secondary border-secondary border-2 text-slate-200 font-bold p-1 rounded-xl max-md:ml-6 max-md:my-5"
        >
          Login
        </button> -->
        <NuxtLink
          to="/login"
          class="custom-btn !text-white font-bold p-2 rounded-full max-md:ml-6 max-md:my-5"
        >
          Login
        </NuxtLink>
      </div>
    </aside>
  </nav>
</template>

<script setup>
const open = ref(false);
const routes = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Contact",
    link: "/contact-us",
  },
];
</script>

<style scoped>
* {
  color: black;
}

@media (min-width: 769px) and (max-width: 900px) {
  aside {
    width: 70%;
  }
}

.router-link-active {
  color: blue;
}
</style>
