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
      <div class="flex items-center gap-2 md:hidden">
        <Icon name="ph:bag-light" class="text-3xl" />
        Cart ( 0 )
      </div>

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
      class="overlay fixed w-screen h-full top-0"
      @click="open = false"
    ></div>

    <aside
      :class="open ? 'left-0' : 'left-[-100%] '"
      class="flex items-center max-md:items-start md:justify-between md:flex-row flex-col md:w-[63%] max-md:fixed top-0 left-0 h-full w-[50%] transition-[left] duration-500 ease-in"
    >
      <div class="md:hidden p-6 w-full mb-5 border-b-2 border-slate-800">
        <!-- <a href="#" class="font-bold italic font-sans text-xl">RAGAB</a> -->
        <NuxtImg src="/edited-logo.png" class="h-10 object-cover" />
      </div>

      <ul class="flex gap-5 max-md:flex-col">
        <li v-for="link in links" :key="link.name" class="max-md:ml-8">
          <a href="#" class="hover:text-primary text-[18px]">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1 hidden md:flex">
          <Icon name="ph:bag-light" class="text-3xl" />
          <span class="mt-1"> Cart ( 0 ) </span>
        </div>

        <!-- <button
          class="bg-transparent hover:bg-secondary border-secondary border-2 text-slate-200 font-bold p-1 rounded-xl max-md:ml-6 max-md:my-5"
        >
          Login
        </button> -->
        <button
          class="bg-secondary !text-white font-bold p-2 rounded-full hover:bg-[#2ea0ec] max-md:ml-6 max-md:my-5"
        >
          Login
        </button>
      </div>
    </aside>
  </nav>
</template>

<script setup>
const open = ref(false);
const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Products",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
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
</style>
