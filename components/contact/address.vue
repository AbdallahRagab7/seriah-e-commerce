<template>
  <div class="flex flex-col gap-6 mb-6 md:mb-0 font-medium text-base">
    <!-- START ADDRESS -->
    <div class="flex items-start gap-4">
      <div class="flex justify-center items-center w-6 h-6 rounded-md">
        <Icon
          name="mdi:address-marker-outline"
          class="w-full h-full text-gray-700"
        />
      </div>

      <div>
        <p class="text-lg">Address:</p>
        <p class="text-gray-500">
          1234 Heaven Stress, Beverly Hill, Melbourne, USA.
        </p>
      </div>
    </div>
    <!-- END ADDRESS -->
    <!-- START EMAIL -->
    <div class="flex items-start gap-4">
      <div class="flex justify-center items-center w-6 h-6 rounded-md">
        <Icon name="oui:email" class="w-full h-full text-gray-700" />
      </div>

      <div>
        <p class="text-lg">Email:</p>
        <p class="text-gray-500">Contact@basictheme.com.</p>
      </div>
    </div>
    <!-- END EMAIL -->
    <!-- START Phone Number -->
    <div class="flex items-start gap-4">
      <div class="flex justify-center items-center w-6 h-6 rounded-md">
        <Icon name="lets-icons:phone" class="w-full h-full text-gray-700" />
      </div>

      <div>
        <p class="text-lg">Phone Number:</p>
        <p class="text-gray-500">(800) 123 456 789</p>
      </div>
    </div>
    <!-- END PHONE -->
  </div>
</template>
