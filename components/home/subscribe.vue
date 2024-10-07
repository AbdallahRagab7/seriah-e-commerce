<template>
  <div class="py-12 mt-20 container">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800">Get Discount Info</h2>
      <p class="text-gray-500 mt-4">
        Subscribe to the Seriah mailing list to receive updates on new arrivals,
        special offers, and other discount information.
      </p>

      <form class="mt-6">
        <label for="email" class="sr-only">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="w-full px-4 py-3 text-center border-0 focus:border-2 rounded-md border-b-2 border-gray-300 focus:outline-none sm:text-sm"
          placeholder="Subscribe to our newsletter..."
        />

        <!-- <button
          type="submit"
          class="mt-4 px-8 py-2 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-black focus:outline-none"
        >
          SUBSCRIBE
        </button> -->
        <div class="w-full flex items-center justify-center mt-7">
          <BaseButton
            class="text-sm px-4 py-2.5 w-[30%] font-semibold tracking-wide rounded-lg"
          >
            SUBSCRIBE
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>
