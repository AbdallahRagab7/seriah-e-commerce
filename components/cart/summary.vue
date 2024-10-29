<template>
  <section class="">
    <!-- v-if="showInCheckout" -->
    <div class="flex border border-gray-300 overflow-hidden rounded-sm">
      <input
        type="email"
        placeholder="Promo code"
        v-model="globalVoucherCode"
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
    <table class="w-full text-left text-gray-800 mt-4">
      <thead>
        <tr>
          <th class="border-b py-2 text-sm font-medium">Products</th>
          <th class="border-b py-2 text-sm font-medium">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in cartStore.items"
          :key="index"
          class="border-b"
        >
          <td class="py-3 text-sm font-medium">
            {{ product.productTtitle }}
            <span class="font-bold">× {{ product.quantity }}</span>
            <span class="text-xs block text-customSlate">{{
              product.variantTitle
            }}</span>
          </td>
          <td class="py-3 text-sm">
            <span class="currency">EGP</span>
            {{ product.totalPrice }}
          </td>
        </tr>
      </tbody>
    </table>

    <ul class="mt-6 space-y-4 text-gray-900">
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

    <!-- Payment Methods -->
    <div class="my-5" v-if="showInCheckout">
      <h1 class="mb-3 font-medium text-base">Payment Methods</h1>
      <ul class="space-y-2">
        <li class="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            v-model="selectedPaymentMethod"
            class="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label class="text-gray-700">Cash On Delivery</label>
        </li>
        <li class="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="visa"
            v-model="selectedPaymentMethod"
            class="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label class="text-gray-700">Visa</label>
        </li>
        <li class="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="fawry"
            v-model="selectedPaymentMethod"
            class="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label class="text-gray-700">Fawry</label>
        </li>
        <li class="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="ewallet"
            v-model="selectedPaymentMethod"
            class="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label class="text-gray-700">E-Wallet</label>
        </li>
      </ul>
    </div>

    <div class="mt-8 flex flex-col gap-3">
      <NuxtLink to="/checkout" v-if="cartStore.items.length > 0">
        <BaseButton
          v-if="!showInCheckout"
          type="button"
          class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide rounded-sm"
        >
          Checkout
        </BaseButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const showInCheckout = ref<Boolean>(false);
if (route.path === "/checkout") {
  showInCheckout.value = true;
}

const selectedPaymentMethod = ref("cod");

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
const globalVoucherCode = useState("globalVoucherCode", () => "");

const voucherResponse = ref();
const applyVoucherCode = async () => {
  if (!globalVoucherCode.value) {
    useNuxtApp().$toast.error("Please enter promo code");
    return;
  }
  loading.value = true;
  voucherResponse.value = await applyVoucher({
    code: globalVoucherCode.value,
    orderValue: subTotal.value,
  });
  loading.value = false;
  globalVoucherCode.value = "";
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
