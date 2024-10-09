<template>
  <div class="flex flex-col gap-6 mb-6 md:mb-0 font-medium text-base">
    <!-- START ADDRESS -->
    <div class="flex items-start gap-4">
      <div
        class="flex justify-center items-center w-[50px] h-[50px] border-2 border-[#ebebeb]"
      >
        <Icon name="ion-location-outline" class="text-customSlate text-xl" />
      </div>

      <div>
        <p class="text-[14px] font-medium">Address:</p>
        <p class="text-customSlate text-[14px]">
          1234 Heaven Stress, Beverly Hill, Melbourne, USA.
        </p>
      </div>
    </div>
    <!-- END ADDRESS -->
    <!-- START EMAIL -->
    <div class="flex items-start gap-4">
      <div
        class="flex justify-center items-center w-[50px] h-[50px] border-2 border-[#ebebeb]"
      >
        <Icon name="oui:email" class="text-customSlate text-xl" />
      </div>

      <div>
        <p class="text-[14px] font-medium">Email:</p>
        <p class="text-customSlate text-[14px]">Contact@basictheme.com.</p>
      </div>
    </div>
    <!-- END EMAIL -->
    <!-- START Phone Number -->
    <div class="flex items-start gap-4">
      <div
        class="flex justify-center items-center w-[50px] h-[50px] border-2 border-[#ebebeb]"
      >
        <Icon name="solar:phone-linear" class="text-customSlate text-2xl" />
      </div>

      <div>
        <p class="text-[14px] font-medium">Phone Number:</p>
        <p class="text-customSlate text-[14px]">(800) 123 456 789</p>
      </div>
    </div>
    <!-- END PHONE -->
  </div>
</template>
