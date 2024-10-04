<template>
  <div class="container xl:p-[2rem] bg-white py-10">
    <div class="grid md:grid-cols-3 gap-6">
      <!--START ITEMS CONTAINER -->
      <div class="md:col-span-2 bg-gray-100 p-4 shadow-md rounded-md">
        <h2 class="text-2xl font-bold text-gray-800">Checkout</h2>
        <hr class="border-gray-300 mt-4 mb-8" />

        <!-- <CartItem v-for="i in 3" :key="i" /> -->
        <form class="pb-10">
          <div class="grid md:grid-cols-2 gap-3 mt-2">
            <div>
              <label
                class="text-sm text-slate-800 font-semibold"
                for="firstName"
              >
                First Name</label
              >
              <input id="firstName" type="text" class="customInput w-full" />
            </div>

            <div>
              <label
                class="text-slate-800 font-semibold text-sm"
                for="lastName"
              >
                Last Name</label
              >
              <input id="lastName" type="text" class="customInput w-full" />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3 mt-2">
            <div>
              <label class="text-slate-800 font-semibold text-sm" for="email">
                Email Address</label
              >
              <input id="email" type="text" class="customInput w-full" />
            </div>

            <div>
              <label class="text-slate-800 font-semibold text-sm" for="phone">
                Phone Number</label
              >
              <input id="phone" type="text" class="customInput w-full" />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3 mt-2">
            <div>
              <label class="text-slate-800 font-semibold text-sm" for="city">
                City</label
              >
              <input id="city" type="text" class="customInput w-full" />
            </div>

            <div>
              <label
                class="text-slate-800 font-semibold text-sm"
                for="dateOfBirth"
              >
                Date of birth</label
              >
              <input id="dateOfBirth" type="date" class="customInput w-full" />
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 mt-2">
            <div class="col-span-2">
              <label class="text-slate-800 font-semibold text-sm" for="city">
                Address</label
              >
              <input id="address" type="text" class="customInput w-full" />
            </div>
          </div>

          <div class="w-full flex items-center justify-center mt-10">
            <BaseButton
              class="text-sm px-4 py-2.5 w-1/2 font-semibold tracking-wide rounded-lg"
            >
              Place Order
            </BaseButton>
          </div>
        </form>
      </div>

      <!-- END OF ITEMS CONTAINER -->

      <!-- START OF SUMMARY -->
      <div class="bg-gray-100 rounded-md p-4 shadow-md max-h-[410px]">
        <CartSummary />
      </div>
      <!-- END OF ITEMS CONTAINER-->
    </div>
  </div>
</template>
