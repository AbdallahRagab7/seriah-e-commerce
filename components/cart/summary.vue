<template>
  <section>
    {{ voucherResponse }}
    <div
      v-if="showCheckoutBtnAndPromo"
      class="flex border border-gray-300 overflow-hidden rounded-sm"
    >
      <input
        type="email"
        placeholder="Promo code"
        v-model="code"
        class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
      />
      <BaseButton
        @click="applyVoucherCode"
        :isLoading="loading"
        type="button"
        class="custom-btn flex items-center justify-center font-semibold tracking-wide px-4 text-sm"
      >
        Apply
      </BaseButton>
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
          {{ Discount.toFixed(2) }}
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
const route = useRoute();
const showCheckoutBtnAndPromo = ref<Boolean>(true);
if (route.path === "/checkout") {
  showCheckoutBtnAndPromo.value = false;
}

const cartStore = useCartStore();
const subTotal = computed(() => {
  const subTotal = cartStore.items.reduce(
    (totalPrice: number, item: ICartItem) =>
      totalPrice + item.quantity * item.price,
    0
  );
  return subTotal;
});

const { applyVoucher } = useOrder();
const loading = ref(false);
const code = ref("");
// const globalVoucherCode = useState("voucherCode", () => "");

const voucherResponse = ref();
const applyVoucherCode = async () => {
  if (!code.value) {
    useNuxtApp().$toast.error("Please enter promo code");
    return;
  }
  loading.value = true;
  voucherResponse.value = await applyVoucher({
    code: code.value,
    orderValue: subTotal.value,
  });
  loading.value = false;
};

const Discount = computed(() => {
  if (voucherResponse.value?.newOrderValue) {
    return subTotal.value - voucherResponse.value?.newOrderValue;
  } else {
    return 0;
  }
});
const totalPrice = computed(() => {
  if (voucherResponse.value?.newOrderValue) {
    return voucherResponse.value?.newOrderValue;
  } else {
    return subTotal.value;
  }
});
</script>
