<template>
  <div
    class="receipt p-3 top-0 left-[50%] text-center py-3 text-black w-full text-sm h-full bg-red-500"
  >
    <table class="w-full infoTable">
      <tr>
        <td>رقم الفاتورة</td>
        <td class="font-bold">{{ transaction.serialNumber }}</td>
        <td>نوع الفاتورة</td>
        <td class="font-bold">
          {{ getTransactionTypeLabel(transaction.type) }}
        </td>
        <td>حالة الفاتورة</td>
        <td class="font-bold">
          {{
            transaction.status === "paid"
              ? "مدفوعة"
              : transaction.status === "partiallyPaid"
              ? "مدفوعة جزئيا"
              : "غير مدفوعه"
          }}
        </td>
        <td v-if="transaction.customer">العميل</td>
        <td v-if="transaction.customer" class="font-bold">
          {{ transaction.customer.name }} ({{
            transaction.customer.phoneNumber
          }})
        </td>
      </tr>
      <tr>
        <td colspan="3">تاريخ الفاتورة</td>
        <td colspan="3" class="font-bold">
          {{ formatDate(transaction.createdAt) }}
        </td>
      </tr>
      <tr>
        <td colspan="3">تاريخ إستحقاق الفاتورة</td>
        <td colspan="3" class="font-bold">
          {{ formatDate(transaction.dueDate) }}
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
        <tr v-for="product in transaction.TransactionItems" :key="product.id">
          <td>{{ product.product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            {{ isNegativeInvoice ? product.buyPrice : product.sellPrice }}
          </td>
          <td>
            {{
              (isNegativeInvoice ? product.buyPrice : product.sellPrice) *
              product.quantity
            }}
            ج.م
          </td>
        </tr>
      </tbody>
    </table>

    <hr class="my-3" />
    <table class="w-full">
      <tbody>
        <tr>
          <td class="font-bold">الإجمالي</td>
          <td>{{ transaction.total }} ج.م</td>
        </tr>
      </tbody>
    </table>

    <hr class="my-3" />
    <div v-if="storeInfo" class="text-black flex justify-around">
      <span>{{ storeInfo.phoneNumber }}</span>
      <span>|</span>
      <span>{{ storeInfo.secondPhoneNumber }}</span>
    </div>
    <hr class="my-3" />
    <div>{{ storeInfo.address }}</div>
    <hr class="my-3" />
    <div>{{ storeInfo.recepitInfo }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        public: {
          APP_NAME: "My Store",
        },
      },
      transaction: {
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
      },
      storeInfo: {
        phoneNumber: "01012345678",
        secondPhoneNumber: "01087654321",
        address: "123 Main St, City",
        recepitInfo: "Thank you for your purchase!",
      },
    };
  },
  computed: {
    isNegativeInvoice() {
      return this.transaction.total < 0;
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    getTransactionTypeLabel(type) {
      const types = { sale: "بيع", purchase: "شراء" };
      return types[type] || "نوع غير معروف";
    },
  },
};
</script>

<style scoped>
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
