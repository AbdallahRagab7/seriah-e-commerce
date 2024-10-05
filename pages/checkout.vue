<template>
  <div class="container xl:p-[2rem] bg-white py-10">
    <div class="grid md:grid-cols-3 gap-6">
      <!--START ITEMS CONTAINER -->
      <div class="md:col-span-2 bg-gray-100 p-4 shadow-md rounded-md">
        <h2 class="text-2xl font-bold text-gray-800">Checkout</h2>
        <hr class="border-gray-300 mt-4 mb-8" />

        <!-- <CartItem v-for="i in 3" :key="i" /> -->
        <CheckoutForm />
      </div>

      <!-- END OF ITEMS CONTAINER -->

      <!-- START OF SUMMARY -->
      <div class="bg-gray-100 rounded-md p-4 shadow-md max-h-[410px]">
        <CartSummary />
      </div>
      <!-- END OF ITEMS CONTAINER-->
    </div>
  </div>
</template>
