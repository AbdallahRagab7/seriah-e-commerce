<template>
  <form class="space-y-4">
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label for="name" class="customLabel">Name *</label>
        <input
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
        id="message"
        class="customInput w-full h-32"
        placeholder="Your Message"
      ></textarea>
    </div>

    <BaseButton class="px-4 py-2 rounded-xl"> Send Message </BaseButton>
  </form>
</template>
