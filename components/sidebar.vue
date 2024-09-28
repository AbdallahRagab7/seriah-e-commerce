<template>
  <nav
    class="bg-[#0f1016] p-4 flex justify-between items-center shadow-md fixed w-full"
  >
    <div>
      <a href="#" class="font-bold italic font-sans text-xl">RAGAB</a>
    </div>

    <button @click="open = !open" class="text-3xl flex items-center md:hidden">
      <ion-icon :name="open ? 'close' : 'menu'"></ion-icon>
    </button>

    <!-- to close the sidebar when click bra el navbar -->
    <div
      v-if="open"
      class="overlay fixed w-screen h-full top-0"
      @click="open = false"
    ></div>

    <aside
      :class="open ? 'left-0' : 'left-[-100%]'"
      class="flex items-center max-md:items-start md:justify-between md:flex-row bg-[#0f1016] flex-col md:w-[60%] max-md:fixed top-0 left-0 h-full w-[50%] transition-[left] duration-500 ease-in"
    >
      <div class="md:hidden p-6 w-full mb-5 border-b-2 border-slate-800">
        <a href="#" class="font-bold italic font-sans text-xl">RAGAB</a>
      </div>

      <ul class="flex gap-5 max-md:flex-col">
        <li v-for="link in links" :key="link.name" class="max-md:ml-8">
          <a href="#" class="hover:text-gray-500 text-[18px]">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div>
        <button
          class="bg-[#a6c1ee] text-white font-bold p-2 rounded-full hover:bg-[#87acec] max-md:ml-6 max-md:my-5"
        >
          Sign Up
        </button>
      </div>
    </aside>
  </nav>
</template>

<script setup>
import { ref } from "vue";
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
  color: white;
}
</style>
