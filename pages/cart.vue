<template>
  <div class="container xl:p-[2rem] bg-white py-10">
    <div class="grid md:grid-cols-3 gap-6">
      <!--START ITEMS CONTAINER -->
      <div class="md:col-span-2 p-4 px-8 bg-gray-50 rounded-md">
        <h2 class="text-2xl ml-2 font-bold text-gray-800">Cart</h2>
        <hr class="border-gray-300 mt-4 mb-8" />

        <CartItem v-for="i in 3" :key="i" />
      </div>

      <!-- END OF ITEMS CONTAINER -->

      <!-- START OF SUMMARY -->
      <div class="rounded-md p-4 bg-gray-50 max-h-[410px]">
        <CartSummary />
      </div>
      <!-- END OF ITEMS CONTAINER-->
    </div>
  </div>
</template>
