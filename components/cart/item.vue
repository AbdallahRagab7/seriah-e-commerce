<template>
  <div class="grid grid-cols-3 items-center gap-4 mb-12">
    <div class="col-span-2 flex items-center gap-4">
      <!-- to make image size static , don't shrink when resizing -->
      <div class="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
        <NuxtImg src="/apple-watch.png" class="w-full h-full object-contain" />
      </div>

      <div>
        <h3 class="text-base font-bold text-gray-800 mb-1">
          Apple Watch Series 7 GPS, Aluminium Case, Apple Watch
        </h3>
        <h6 class="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

        <div class="flex gap-4 mt-4">
          <div>
            <button
              type="button"
              class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >
              <Icon
                name="iconamoon:sign-minus-bold"
                class="w-4 h-4 text-black"
              />
              <span class="mx-2 text-sm">1</span>

              <Icon
                name="iconamoon:sign-plus-fill"
                class="w-4 h-4 text-black"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-auto">
      <h4 class="text-base font-bold text-gray-800">
        <span class="currency">EGP</span>
        20.00
      </h4>
    </div>
    <!-- <hr class="border-gray-300" /> -->
  </div>
</template>
