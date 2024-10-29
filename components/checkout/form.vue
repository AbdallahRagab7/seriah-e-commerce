<template>
  <form @submit.prevent="placeOrder" class="pb-10">
    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div class="">
        <label class="customLabel" for="name"> Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          class="customInput w-full"
          disabled
        />
      </div>

      <div>
        <label class="customLabel" for="email">
          Email <Address></Address
        ></label>
        <input
          v-model="user.email"
          disabled
          id="email"
          required
          type=""
          class="customInput w-full"
        />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div>
        <label class="customLabel" for="phone"> Phone Number</label>
        <input
          id="phone"
          required
          type=""
          class="customInput w-full"
          v-model="data.phoneNumber"
        />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div class="">
        <label class="customLabel" for="notes"> Notes</label>
        <textarea
          id="notes"
          type="text"
          rows="3"
          class="customInput w-full"
          v-model="data.notes"
        />
      </div>
      <div class="">
        <label class="customLabel" for="city"> Address</label>
        <textarea
          id="address"
          rows="3"
          type="text"
          required
          class="customInput w-full"
          v-model="data.address"
        />
      </div>
    </div>

    <div class="w-full flex items-center justify-end mt-10">
      <BaseButton
        :isLoading="loading"
        class="text-sm px-4 py-2.5 w-[90%] mx-auto font-semibold tracking-wide rounded-sm"
      >
        Place Order
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const { createOrder } = useOrder();
const cartStore = useCartStore();
const user = useStrapiUser();

const data = ref({
  phoneNumber: "",
  address: "",
  notes: "",
});

const cartItemsMapper = computed(() => {
  return cartStore.items.map((item: ICartItem) => {
    return {
      variantId: item.variantId,
      quantity: item.quantity,
    };
  });
});

const globalVoucherCode = useState("globalVoucherCode", () => "");

const loading = ref(false);
const placeOrder = async () => {
  loading.value = true;
  await createOrder({
    ...data.value,
    products: cartItemsMapper.value,
    voucher: globalVoucherCode.value,
  });
  loading.value = false;
};
</script>
