<template>
  <div
    class="receipt p-3 top-0 left-[50%] text-center py-3 text-black w-full text-sm h-full bg-red-500"
  >
    <div class="text-center mb-10">
      <NuxtImg src="/edited-logo.png" class="h-9 md:h-9 object-cover mx-auto" />
    </div>

    <table class="w-full infoTable">
      <tr>
        <td>رقم الطلب</td>
        <td class="font-bold">{{ order?.id }}</td>

        <td>حالة الطلب</td>
        <td class="font-bold">
          {{ order?.status }}
        </td>
        <td>العميل</td>
        <td class="font-bold">{{ user?.name }} ({{ user?.phoneNumber }})</td>
      </tr>
      <tr>
        <td colspan="3">تاريخ الطلب</td>
        <td colspan="3" class="font-bold">
          {{ formatDate(order?.createdAt) }}
        </td>
      </tr>
    </table>

    <table class="w-full my-2 text-xs">
      <thead>
        <tr>
          <th>إسم الصنف</th>
          <th>الكمية</th>
          <th>سعر الوحدة</th>
          <th>الإجمالي</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in order.items" :key="product.id">
          <td>{{ product?.productName }}</td>
          <td>{{ product?.quantity }}</td>
          <td>
            {{ product?.sellPrice }}
            ج.م
          </td>
          <td>
            {{ product?.quantity * product?.sellPrice }}
            ج.م
          </td>
        </tr>
      </tbody>
    </table>

    <hr class="my-3" />
    <table class="w-full">
      <tbody>
        <tr>
          <td class="font-bold">مصاريف الشحن</td>
          <td>{{ order?.shippingCost }} ج.م</td>
        </tr>
        <tr>
          <td class="font-bold">الإجمالي</td>
          <td>{{ order?.totalPrice }} ج.م</td>
        </tr>
      </tbody>
    </table>

    <hr class="my-3" />
    <div class="text-black flex justify-around">
      <span>{{ socialLinks.footerData.phoneNumber }}</span>
    </div>
    <hr class="my-3" />
    <div>{{ socialLinks.footerData.address }}</div>
    <hr class="my-3" />
    <div>Thank you for your purchase!</div>
  </div>
</template>

<script setup lang="ts">
const user = useStrapiUser<IUser>();
const socialLinks = useSocialLinksStore();

interface Props {
  order: IMyOrder;
}

const props = defineProps<Props>();

//fake data
const transaction = ref({
  serialNumber: "123456789",
  type: "sale",
  status: "paid",
  createdAt: new Date(),
  dueDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // One week from now
  total: 1500,
  customer: {
    name: "John Doe",
    phoneNumber: "01012345678",
  },
  TransactionItems: [
    {
      id: 1,
      product: { name: "Product 1" },
      quantity: 2,
      buyPrice: 100,
      sellPrice: 150,
    },
    {
      id: 2,
      product: { name: "Product 2" },
      quantity: 1,
      buyPrice: 200,
      sellPrice: 300,
    },
  ],
});

const isNegativeInvoice = computed(() => transaction.value.total < 0);

//date formatter to arabic
const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.receipt {
  display: none;
}
@media print {
  .receipt {
    display: block !important;
  }
}
th,
td {
  border: 1px solid black;
  padding: 5px;
  text-align: center;
  color: black;
}
.infoTable th,
.infoTable td {
  border: 1px dashed black;
  padding: 5px;
  text-align: center;
  color: black;
}
</style>
