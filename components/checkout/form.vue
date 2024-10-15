<template>
  <form class="pb-10">
    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div>
        <label class="customLabel" for="firstName"> First Name</label>
        <input
          id="firstName"
          type="text"
          class="customInput w-full"
          v-model="data.firstName"
        />
      </div>

      <div>
        <label class="customLabel" for="lastName"> Last Name</label>
        <input
          id="lastName"
          type="text"
          class="customInput w-full"
          v-model="data.lastName"
        />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div>
        <label class="customLabel" for="email"> Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="customInput w-full"
          v-model="data.email"
        />
      </div>

      <div>
        <label class="customLabel" for="phone"> Phone Number</label>
        <input
          id="phone"
          required
          type="text"
          class="customInput w-full"
          v-model="data.phone"
        />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div>
        <label class="customLabel" for="city"> City</label>
        <input
          id="city"
          type="text"
          class="customInput w-full"
          v-model="data.city"
        />
      </div>

      <div>
        <label class="customLabel" for="dateOfBirth"> Date of birth</label>
        <input
          id="dateOfBirth"
          type="date"
          class="customInput w-full"
          v-model="data.dateOfBirth"
        />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-3 mt-2">
      <div class="col-span-2">
        <label class="customLabel" for="city"> Address</label>
        <input
          id="address"
          type="text"
          class="customInput w-full"
          v-mode="data.address"
        />
      </div>
    </div>

    <div class="w-full flex items-center justify-center mt-10">
      <BaseButton
        class="text-sm px-4 py-2.5 w-1/2 font-semibold tracking-wide rounded-lg"
      >
        Place Order
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const data = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  dateOfBirth: "",
  address: "",
});
const loading = ref(false);
</script>
