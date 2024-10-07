<template>
  <div>
    <h1 class="text-start font-semibold bg-white p-4 mb-5 rounded-md shadow-sm">
      My Orders
    </h1>
    <table class="min-w-full rounded-md shadow-sm border">
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
        <tr v-for="order in orders" :key="order.id" class="border-t">
          <td class="py-4 px-4 text-sm">#{{ order.id }}</td>
          <td class="py-4 px-4 text-sm">{{ order.name }}</td>
          <td class="py-4 px-4 text-sm">${{ order.price }}</td>
          <td class="py-4 px-4 text-sm text-blue-600">
            <a href="#">View</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const headers = ["ORDER ID", "NAME", "PRICE", "DETAILS"];

// Define the orders data
const orders = [
  { id: 3520, name: "University seminar series global.", price: 144.0 },
  { id: 2441, name: "Web coding and apache basics", price: 59.54 },
];
</script>
