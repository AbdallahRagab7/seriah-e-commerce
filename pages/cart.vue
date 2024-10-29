<template>
  <div class="myContainer py-[60px] mt-16 bg-white">
    <div class="grid md:grid-cols-3 gap-14 md:gap-4 lg:gap-8">
      <!--START ITEMS CONTAINER -->
      <div
        class="md:col-span-2 p-4 lg:px-8 bg-gray-50 rounded-md h-fit"
        :class="
          cartStore.items.length > 0
            ? 'md:col-span-2'
            : 'md:col-span-3 w-[85%] mx-auto'
        "
      >
        <h2 class="!text-[27px]">Cart</h2>
        <!-- {{ items }} -->
        <hr class="border-gray-300 mt-4 mb-8" />
        <h1
          v-if="cartStore.items.length === 0"
          class="text-2xl text-center my-24"
        >
          Cart Is Empty
        </h1>

        <CartItem
          v-else
          v-for="item in cartStore.items"
          :key="item.id"
          :cartItem="item"
        />
      </div>

      <!-- END OF ITEMS CONTAINER -->

      <!-- START OF SUMMARY -->
      <div
        v-if="cartStore.items.length > 0"
        class="rounded-md p-4 lg:p-4 bg-gray-50 h-fit"
      >
        <CartSummary />
      </div>
      <!-- END OF ITEMS CONTAINER-->
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
</script>
