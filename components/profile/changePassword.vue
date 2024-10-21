<template>
  <div>
    <h1
      class="text-start text-[16px] font-semibold bg-white py-[20px] px-[70px] mb-5 border border-[#eceaea] rounded-sm"
    >
      Change Password
    </h1>
    <form
      @submit.prevent="onSubmit"
      class="bg-white p-5 border border-[#eceaea] rounded-sm space-y-5"
    >
      <div class="px-[50px]">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Old Password</label
        >
        <input
          v-model="data.currentPassword"
          ref="oldPassword"
          type="password"
          placeholder="Enter Old Password"
          class="customInput w-full"
        />
      </div>

      <div class="px-[50px]">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >New Password</label
        >
        <input
          v-model="data.password"
          ref="newPassword"
          type="password"
          placeholder="Enter New Password"
          class="customInput w-full"
        />
      </div>

      <div class="px-[50px]">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <input
          v-model="data.passwordConfirmation"
          ref="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="customInput w-full"
        />
      </div>

      <div class="w-full flex items-center justify-center mt-10">
        <BaseButton
          :isLoading="isLoading"
          class="text-sm px-4 py-2.5 w-1/2 font-semibold tracking-wide rounded-lg"
        >
          Update Password
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const isLoading = ref(false);

const { changePassword } = useStrapiAuth();
const data = ref({
  currentPassword: "",
  password: "",
  passwordConfirmation: "",
});

const onSubmit = async () => {
  try {
    isLoading.value = true;

    await changePassword({
      currentPassword: data.value.currentPassword,
      password: data.value.password,
      passwordConfirmation: data.value.passwordConfirmation,
    });
    isLoading.value = false;

    toast.success("Password changed!");
  } catch (error: any) {
    isLoading.value = false;

    toast.error(error.error.message || "Failed to change password");
  }
};
</script>
