<template>
  <div>
    <h1
      class="text-start text-[16px] font-semibold bg-white py-[20px] px-[70px] mb-5 border border-[#eceaea] rounded-sm"
    >
      Change Password
    </h1>
    <form class="bg-white p-5 border border-[#eceaea] rounded-sm space-y-5">
      <div class="px-[50px]">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Old Password</label
        >
        <input
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
          ref="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="customInput w-full"
        />
      </div>

      <div class="w-full flex items-center justify-center mt-10">
        <BaseButton
          class="text-sm px-4 py-2.5 w-1/2 font-semibold tracking-wide rounded-lg"
        >
          Update Password
        </BaseButton>
      </div>
    </form>
  </div>
</template>
