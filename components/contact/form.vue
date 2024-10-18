<template>
  <form class="space-y-4" @submit.prevent="contact">
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label for="name" class="customLabel">Name *</label>
        <input
          v-model="data.name"
          id="name"
          type="text"
          class="customInput w-full"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label for="email" class="customLabel">Email *</label>
        <input
          v-model="data.email"
          id="email"
          type="email"
          class="customInput w-full"
          placeholder="Your Email"
          required
        />
      </div>
    </div>

    <div>
      <label for="subject" class="customLabel">Subject *</label>
      <input
        v-model="data.subject"
        id="subject"
        type="text"
        class="customInput w-full"
        placeholder="Subject"
        required
      />
    </div>

    <div>
      <label for="message" class="customLabel">Message</label>
      <textarea
        v-model="data.message"
        id="message"
        class="customInput w-full h-32"
        placeholder="Your Message"
      ></textarea>
    </div>

    <BaseButton class="px-4 py-2 rounded-sm" :loading="loading">
      Send Message
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
const { contactUs } = useHomePage();
const data = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const loading = ref(false);
const contact = async () => {
  loading.value = true;
  await contactUs(data.value);
  loading.value = false;
};
</script>
