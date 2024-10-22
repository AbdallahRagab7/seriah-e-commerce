<template>
  <div class="container pb-[60px]">
    <form
      @submit.prevent="onSubmit"
      class="md:max-w-md max-w-sm mx-auto border shadow-[0px_8px_24px_rgba(149,157,165,0.2)] md:px-10 px-5 py-10 rounded-sm mt-20 text-center"
    >
      <h1 class="text-2xl text-primary mb-4">Reset Password</h1>
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

      <BaseButton
        :isLoading="isLoading"
        type="submit"
        class="font-medium rounded-sm text-sm px-6 py-2.5 w-full"
      >
        Reset Password
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const isLoading = ref(false);

//user abdallah or email abdallah@email.com
//Abdallah@2022
//test@gmail.com
const email = ref("");

const { forgotPassword } = useStrapiAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    isLoading.value = true;
    await forgotPassword({ email: email.value });
    isLoading.value = false;
    toast.success("email sent successfully");
    router.push("/");
  } catch (error: any) {
    isLoading.value = false;

    toast.error(error.error.message || "Failed to forget password");
  }
};
</script>
