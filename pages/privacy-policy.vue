<template>
  <div
    class="myContainer py-[60px] text-center mb-20 min-h-[calc(100vh-200px)]"
  >
    <h1 class="heading1 mb-10">Privacy Policy</h1>
    <p class="text-customSlate text-base max-w-[85%] mx-auto">
      <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum
      hic doloribus voluptatibus, dolores asperiores, aperiam doloremque
      exercitationem sunt sed inventore ducimus blanditiis officia officiis?
      Magni veniam repellat adipisci distinctio. -->
      {{ socialLinks.policies.privacy_policy }}
    </p>
  </div>
</template>

<script setup lang="ts">
const socialLinks = useSocialLinksStore();
</script>
