<template>
  <footer class="bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div
          class="flex flex-col gap-1 mb-6 md:mb-0 text-gray-400 font-medium text-base"
        >
          <a href="#" class="flex items-center mb-3">
            <span
              class="self-center text-2xl text-white font-semibold whitespace-nowrap"
              >SERIAH</span
            >
          </a>
          <span class="flex items-center gap-1"
            ><Icon name="mdi:address-marker-outline" /> Address:
            {{ socialLinks.footerData.address }}
          </span>
          <span class="flex items-center gap-1"
            ><Icon name="oui:email" /> Email: {{ socialLinks.footerData.email }}
          </span>
          <span class="flex items-center gap-1">
            <Icon name="lets-icons:phone" />Phone Number:
            {{ socialLinks.footerData.phoneNumber }}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">
              Resources
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Seriah</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Seirah</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Follow us
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a
                  :href="socialLinks.footerData.Instagram"
                  target="blank"
                  class="hover:underline"
                >
                  Instagram</a
                >
              </li>
              <li class="mb-4">
                <a
                  :href="socialLinks.footerData.youtube"
                  target="blank"
                  class="hover:underline"
                >
                  Youtube</a
                >
              </li>
              <li>
                <a
                  class="hover:underline"
                  :href="`https://wa.me/${socialLinks.footerData.whatsappNumber}`"
                  target="_blank"
                  >WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Legal
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <NuxtLink to="/privacy-policy" class="hover:underline"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/terms" class="hover:underline"
                  >Terms &amp; Conditions</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm sm:text-center text-gray-400"
          >© 2024 <a href="#" class="hover:underline">Seriah™</a>. All Rights
          Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center items-center sm:mt-0">
          <a
            target="_blank"
            :href="socialLinks.footerData.youtube"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <Icon name="circum:youtube" class="w-7 h-7" />
            <span class="sr-only">Youtube page</span>
          </a>

          <a
            :href="socialLinks.footerData.Instagram"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <Icon name="simple-icons:instagram" class="w-5 h-5" />
            <span class="sr-only">instagram</span>
          </a>

          <a
            target="_blank"
            :href="`https://wa.me/${socialLinks.footerData.whatsappNumber}`"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <Icon name="simple-icons:whatsapp" class="w-5 h-5" />
            <span class="sr-only">whatsapp account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = useSocialLinksStore();
</script>
