<template>
  <div class="h-[65vh] container">
    <form
      class="md:max-w-md max-w-sm mx-auto border shadow-md md:px-10 px-5 py-5 rounded-lg mt-20 text-center"
    >
      <h1 class="text-2xl text-primary mb-4">Login</h1>
      <div class="mb-5 text-start">
        <label
          for="email"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-5 text-start">
        <label
          for="password"
          class="block mb-2 text-sm font-semibold text-gray-900"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 focus:border-secondary focus:outline-none text-gray-900 text-sm rounded-lg w-full p-2.5"
          required
        />
      </div>

      <div class="text-end mb-2">
        <a href="#" class="hover:underline text-blue-700">Forgot Password?</a>
      </div>
      <BaseButton
        type="submit"
        class="font-medium rounded-lg text-sm px-6 py-2.5"
      >
        Login
      </BaseButton>
    </form>
  </div>
</template>
