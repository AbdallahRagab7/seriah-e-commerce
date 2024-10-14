<template>
  <section>
    <div
      v-if="showCheckoutBtnAndPromo"
      class="flex border border-gray-300 overflow-hidden rounded-sm"
    >
      <input
        type="email"
        placeholder="Promo code"
        class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
      />
      <button
        type="button"
        class="custom-btn flex items-center justify-center font-semibold tracking-wide px-4 text-sm"
      >
        Apply
      </button>
    </div>

    <ul class="mt-8 space-y-4">
      <li class="flex gap-4 text-base">
        SubTotal
        <span class="ml-auto">
          <span class="currency">EGP </span>
          {{ subTotal.toFixed(2) }}
        </span>
      </li>

      <li class="flex gap-4 text-base">
        Discount
        <span class="ml-auto">
          <span class="currency">EGP </span>
          0
        </span>
      </li>

      <li class="flex gap-4 text-base">
        Shipping
        <span class="ml-auto">
          <span class="currency">EGP </span>
          {{ shipping.toFixed(2) }}
        </span>
      </li>
      <li class="flex gap-4 text-base">
        Total
        <span class="ml-auto">
          <span class="currency">EGP </span>
          {{ totalPrice.toFixed(2) }}
        </span>
      </li>
    </ul>

    <div class="mt-8 flex flex-col gap-3">
      <NuxtLink to="/checkout">
        <BaseButton
          v-if="showCheckoutBtnAndPromo"
          type="button"
          class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide rounded-sm"
        >
          Checkout
        </BaseButton>
      </NuxtLink>

      <NuxtLink to="/">
        <BaseButton
          type="button"
          class="text-sm font-medium !bg-transparent !text-primary hover:!bg-primary hover:!text-white px-4 py-2.5 w-full tracking-wide border border-primary rounded-sm"
        >
          Continue Shopping
        </BaseButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const shipping = ref(2);
const subTotal = computed(() => {
  const subTotal = cartStore.items.reduce(
    (totalPrice: number, item: ICartItem) =>
      totalPrice + item.quantity * item.price,
    0
  );
  return subTotal;
});
const totalPrice = computed(() => subTotal.value + shipping.value);
const route = useRoute();
const showCheckoutBtnAndPromo = ref<Boolean>(true);
if (route.path === "/checkout") {
  showCheckoutBtnAndPromo.value = false;
}
</script>
