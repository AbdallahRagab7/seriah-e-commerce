<template>
  <div>
    <h1
      class="text-start text-[16px] font-semibold bg-white py-[20px] px-[70px] mb-5 border border-[#eceaea] rounded-sm"
    >
      Profile Information
    </h1>
    <form
      @submit.prevent="onSubmit"
      class="bg-white p-5 px-[70px] border border-[#eceaea] rounded-sm"
    >
      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="customLabel" for="name"> Name</label>
          <input
            v-model="data.name"
            id="name"
            type="text"
            class="customInput w-full"
          />
        </div>
        <div>
          <label class="customLabel" for="email"> Email Address</label>
          <input
            v-model="data.email"
            id="email"
            type="text"
            class="customInput w-full"
          />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="customLabel" for="username"> Username</label>
          <input
            v-model="data.userName"
            id="username"
            required
            type="text"
            class="customInput w-full"
          />
        </div>
        <div>
          <label class="customLabel" for="dateOfBirth"> Date of birth</label>
          <input
            v-model="data.birthDate"
            id="dateOfBirth"
            type="date"
            class="customInput w-full"
          />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="customLabel" for="phone"> Phone Number</label>
          <input
            v-model="data.phoneNumber"
            id="phone"
            required
            type="tel"
            class="customInput w-full"
          />
        </div>
        <div>
          <label class="customLabel" for="address"> Address</label>
          <input
            v-model="data.address"
            id="address"
            required
            type="text"
            class="customInput w-full"
          />
        </div>
      </div>

      <!-- <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div class="col-span-2">
          <label class="customLabel" for="city"> Address</label>
          <input id="address" type="text" class="customInput w-full" />
        </div>
      </div> -->

      <div class="w-full flex items-center justify-start mt-10">
        <BaseButton
          :isLoading="isLoading"
          class="text-sm px-4 py-2.5 font-semibold tracking-wide rounded-sm w-full"
        >
          Submit
        </BaseButton>
      </div>
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
  name: user?.value?.name || "",
  email: user.value?.email || "",
  userName: user.value?.username || "",
  phoneNumber: user.value?.phoneNumber || "",
  birthDate: user.value?.birthDate || "",
  address: user.value?.address || "",
});

const { updateUser } = useStrapiAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    isLoading.value = true;
    await updateUser({
      name: data.value.name,
      username: data.value.userName,
      email: data.value.email,
      phoneNumber: data.value.phoneNumber + "",
      birthDate: data.value.birthDate,
    });
    isLoading.value = false;
    toast.success("Data is updated successfully");
    router.push("/");
  } catch (error: any) {
    isLoading.value = false;
    toast.error(error.error.message || "Failed to update data");
  }
};
</script>
