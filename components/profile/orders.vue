<template>
  <div class="">
    <h1
      class="text-start text-[16px] font-semibold bg-white py-[20px] px-[70px] mb-5 border border-[#eceaea] rounded-sm"
    >
      My Orders
    </h1>

    <!-- {{ myOrders }} -->

    <div class="bg-white px-[20px] overflow-x-auto max-md:max-w-[80vw]">
      <table class="bg-white rounded-sm border-none border-[#eceaea]">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header"
              class="py-3 px-4 border-b text-left text-sm font-semibold"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in myOrders" :key="order.id" class="border-t">
            <td class="py-4 px-4 text-sm text-center">#{{ order.id }}</td>
            <td
              class="py-4 px-4 text-sm text-center"
              :class="orderStatus[order.status]?.style"
            >
              {{ orderStatus[order.status]?.label }}
            </td>
            <td class="py-4 px-4 text-sm text-center">
              {{ order.totalPrice }}
            </td>
            <td class="py-4 px-4 text-sm text-center">
              {{ order.phoneNumber }}
            </td>
            <td class="py-4 px-4 text-sm text-center">
              {{ order.address }}
            </td>
            <td class="py-4 px-4 text-sm text-center">
              {{ order.estimatedDeliveryDate || "_" }}
            </td>
            <td
              class="py-4 px-4 text-sm text-center text-blue-600 cursor-pointer"
            >
              <button @click="printContent(order)">Print</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="hidden">
      <basePrint
        id="printComponent"
        ref="printComponent"
        :order="selectedOrder"
      />
    </div>
  </div>
</template>

<script setup>
import prntr from "prntr";
const printComponent = ref();
const selectedOrder = ref("");
const printContent = (order) => {
  selectedOrder.value = order;

  // Delay to ensure `basePrint` has the order data before printing
  // without it old selectedOrder data will be displayed
  setTimeout(() => {
    prntr({
      printable: "printComponent",
      type: "html",
      targetStyles: ["*"],
      style: ".receipt{display:block!important;}",
    });
  }, 0);
};
// ".body{display:block!important;width:100%!important; height: 100% !important;}",

const headers = [
  "ID",
  "Status",
  "TotalPrice",
  "Phone",
  "Address",
  "Estimate Delivery ",
];

const { getUserOrders } = useOrder();

const { data: myOrders, error } = useAsyncData("myOrders", () =>
  getUserOrders()
);

const orderStatus = {
  pending: {
    label: "Pending",
    style: "text-orange-600	",
  },
  processing: {
    label: "Processing",
    style: "text-yellow-500",
  },
  onHold: {
    label: "On Hold",
    style: "text-blue-500",
  },
  completed: {
    label: "Completed",
    style: "text-green-500",
  },
  outForDelivery: {
    label: "Out For Delivery",
    style: "text-yellow-500",
  },
  canceled: {
    label: "Canceled",
    style: "text-red-500",
  },
  failed: {
    label: "Failed",
    style: "text-red-500",
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-slate-200;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-600 rounded-full;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-700;
}
</style>
