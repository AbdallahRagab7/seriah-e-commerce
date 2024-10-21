<template>
  <div class="container pb-[60px]">
    <form
      @submit.prevent="onSubmit"
      class="md:max-w-md max-w-sm mx-auto border shadow-[0px_8px_24px_rgba(149,157,165,0.2)] md:px-10 px-5 py-6 rounded-sm mt-20 text-center"
    >
      <h1 class="text-2xl text-primary mb-4">Register</h1>
      <div class="mb-5 text-start">
        <label
          for="username"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Username</label
        >
        <input
          v-model="data.userName"
          type="text"
          id="username"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          required
        />
      </div>
      <div class="mb-5 text-start">
        <label
          for="email"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Your email</label
        >
        <input
          v-model="data.email"
          type="text"
          id="email"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-5 text-start">
        <label
          for="password"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Your password</label
        >
        <input
          v-model="data.password"
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          required
        />
      </div>

      <div class="mb-5 text-start">
        <label
          for="phone"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Phone Number</label
        >
        <input
          v-model="data.phone"
          type="number"
          id="username"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          required
        />
      </div>
      <div class="mb-5 text-start">
        <label
          for="dateOfBirth"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Birthdate</label
        >
        <input
          id="dateOfBirth"
          type="date"
          class="customInput w-full"
          v-model="data.birth_date"
        />
      </div>

      <BaseButton
        :isLoading="isLoading"
        type="submit"
        class="font-medium rounded-sm text-sm px-6 py-2.5 w-full"
      >
        Register
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
definePageMeta({
  middleware: "is-logged",
});
const isLoading = ref(false);

const user = useStrapiUser();

//user abdallah or email abdallah@email.com
//Abdallah@2022
const data = ref({
  email: "",
  password: "",
  userName: "",
  phone: "",
  birth_date: "",
});

const { register } = useStrapiAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    isLoading.value = true;
    await register({
      username: data.value.userName,
      email: data.value.email,
      password: data.value.password,
      phoneNumber: data.value.phone,
      birth_date: data.value.birth_date,
    });
    isLoading.value = false;
    toast.success("You have been registered");
    router.push("/");
  } catch (error: any) {
    isLoading.value = false;
    console.log(error, "its error");
    toast.error(error.error.message || "Failed to register");
  }
};
</script>
