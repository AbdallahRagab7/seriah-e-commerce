<template>
  <div class="py-12 pt-[60px] mt-20 myContainer">
    <div
      ref="subscribeSection"
      class="subscribe max-w-xl mx-auto text-center"
      :class="{ 'animate-subscribe': isVisible }"
    >
      <h2 class="heading1">Get Discount Info</h2>
      <p class="text-customSlate text-base mt-4">
        Subscribe to the Seriah mailing list to receive updates on new arrivals,
        special offers, and other discount information.
      </p>

      <form class="mt-6" @submit.prevent="subscribe">
        <label for="email" class="sr-only">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          v-model="email"
          required
          class="w-full px-4 py-3 text-center border-0 focus:border-2 rounded-md border-b-2 border-gray-300 focus:outline-none sm:text-sm"
          placeholder="Subscribe to our newsletter..."
        />

        <div class="w-full flex items-center justify-center mt-7">
          <BaseButton
            class="text-sm p-3 w-[30%] font-semibold tracking-wide rounded-sm"
            :isLoading="loading"
          >
            SUBSCRIBE
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { createSubscribe } = useHomePage();
const email = ref("");
const loading = ref(false);
const subscribe = async () => {
  loading.value = true;
  await createSubscribe(email.value);
  loading.value = false;
};

const subscribeSection = ref(null);
const isVisible = ref(false);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.5 }
  );

  if (subscribeSection.value) {
    observer.observe(subscribeSection.value);
  }
});
</script>

<style scoped>
.subscribe {
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s ease;
  transform: translateY(50px);
}

.animate-subscribe {
  opacity: 1;
  transform: translateY(0);
}
</style>
