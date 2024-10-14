<template>
  <section class="shadow-[0_10px_15px_rgba(25,25,25,0.1)]">
    <nav
      class="bg-[#ffff] myContainer py-4 flex justify-between items-center relative w-full"
    >
      <div class="">
        <NuxtLink to="/">
          <NuxtImg src="/edited-logo.png" class="h-10 object-cover" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <!-- mobile view -->
        <NuxtLink to="/cart">
          <div class="flex items-center gap-1 md:hidden">
            <Icon name="ph:bag-light" class="mb-[2px] !text-[22px]" />
            Cart ({{ cartStore.totalQuantity }})
          </div>
        </NuxtLink>

        <!-- <NuxtLink to="/cart">
          <div class="flex items-center gap-1 hidden md:flex">
            <Icon name="ph:bag-light" class="mb-[2px] !text-[22px]" />
            <span class="!text-[15px] hover:text-primary"> Cart (2) </span>
          </div>
        </NuxtLink> -->

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
      <!-- w-[62%] sm:w-[53%] md:w-[60%] -->
      <!-- SideBar -->
      <aside
        :class="open ? 'left-0' : 'left-[-150%] '"
        class="flex items-center z-50 bg-white max-md:items-start md:justify-between md:flex-row flex-col w-[350px] md:w-[65%] max-md:fixed top-0 left-0 h-full transition-[left] duration-500 ease-in"
      >
        <!-- logo mobile view -->
        <div
          class="md:hidden p-3 w-full mb-5 max-md:ml-4 flex justify-between items-center"
        >
          <NuxtImg src="/edited-logo.png" class="h-10 object-cover" />
          <Icon
            @click="open = false"
            name="ic:baseline-close "
            class="!text-3xl mx-5 hover:cursor-pointer"
          />
        </div>

        <ul class="flex gap-8 max-md:flex-col max-md:w-full">
          <li
            v-for="route in routes"
            :key="route.name"
            class="max-md:ml-8 max-md:py-3 max-md:border-b max-md:border-b-[rgba(0,0,0,0.05)]"
          >
            <NuxtLink
              :to="route.link"
              class="hover:text-primary max-md:!font-semibold max-md:hover:pl-1 text-[18px]"
            >
              {{ route.name }}
            </NuxtLink>
          </li>
        </ul>

        <div class="flex items-center gap-3">
          <!-- desktop view -->
          <NuxtLink to="/cart">
            <div class="flex items-center gap-1 hidden md:flex">
              <Icon name="ph:bag-light" class="mb-[2px] !text-[22px]" />
              <span class="!text-[15px] hover:text-primary">
                Cart ({{ cartStore.totalQuantity }})
              </span>
            </div>
          </NuxtLink>

          <!-- <button
          class="bg-transparent hover:bg-secondary border-secondary border-2 text-slate-200 font-bold p-1 rounded-xl max-md:ml-6 max-md:my-5"
        >
          Login
        </button> -->
          <!-- <NuxtLink
          to="/login"
          class="custom-btn !text-white font-bold p-2 rounded-full max-md:ml-6 max-md:my-5"
        >
          Login
        </NuxtLink> -->
          <NuxtLink
            to="/profile"
            class="text-medium !text-[15px] hover:text-primary max-md:hover:pl-1 max-md:ml-5 max-md:mt-10 max-md:!font-semibold"
            >My Account</NuxtLink
          >
        </div>
      </aside>
    </nav>
  </section>
</template>

<script setup lang="ts">
const open = ref(false);
const cartStore = useCartStore();

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
  color: var(--customGray);
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
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
