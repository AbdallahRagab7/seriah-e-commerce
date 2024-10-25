<template>
  <div class="container pb-[60px]">
    <form
      @submit.prevent="onSubmit"
      class="md:max-w-md max-w-sm mx-auto border shadow-[0px_8px_24px_rgba(149,157,165,0.2)] md:px-10 px-5 py-6 rounded-sm mt-20 text-center"
    >
      <h1 class="text-2xl text-primary mb-4">Login</h1>
      <div class="mb-5 text-start">
        <label
          for="email"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Your email</label
        >
        <input
          v-model="email"
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
          v-model="password"
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          required
        />
      </div>

      <div class="text-end mb-2">
        <NuxtLink to="/forgotpassword" class="hover:underline text-blue-700"
          >Forgot Password?</NuxtLink
        >
      </div>
      <BaseButton
        :isLoading="isLoading"
        type="submit"
        class="font-medium rounded-sm text-sm px-6 py-2.5 w-full"
      >
        Login
      </BaseButton>
      <p class="text-sm mt-5">
        Don’t have an account yet?
        <NuxtLink
          to="/register"
          class="font-medium hover:underline text-blue-700"
          >Sign up</NuxtLink
        >
      </p>
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
const email = ref("");
const password = ref("");
const { login } = useStrapiAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    isLoading.value = true;
    await login({ identifier: email.value, password: password.value });
    isLoading.value = false;
    toast.success("You have been logged in");
    router.push("/");
  } catch (error: any) {
    isLoading.value = false;

    toast.error(error.error.message || "Failed to login");
  }
};
</script>
