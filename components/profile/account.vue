<template>
  <div>
    <h1
      class="text-start text-[16px] font-semibold bg-white py-[20px] px-[70px] mb-5 border border-[#eceaea] rounded-sm"
    >
      Profile Information
    </h1>
    <form class="bg-white p-5 px-[70px] border border-[#eceaea] rounded-sm">
      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="customLabel" for="firstName"> First Name</label>
          <input id="firstName" type="text" class="customInput w-full" />
        </div>

        <div>
          <label class="customLabel" for="lastName"> Last Name</label>
          <input id="lastName" type="text" class="customInput w-full" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="customLabel" for="email"> Email Address</label>
          <input id="email" type="text" class="customInput w-full" />
        </div>

        <div>
          <label class="customLabel" for="phone"> Phone Number</label>
          <input id="phone" required type="text" class="customInput w-full" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="customLabel" for="city"> City</label>
          <input id="city" type="text" class="customInput w-full" />
        </div>

        <div>
          <label class="customLabel" for="dateOfBirth"> Date of birth</label>
          <input id="dateOfBirth" type="date" class="customInput w-full" />
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-3 mt-2">
        <div class="col-span-2">
          <label class="customLabel" for="city"> Address</label>
          <input id="address" type="text" class="customInput w-full" />
        </div>
      </div>

      <div class="w-full flex items-center justify-center mt-10">
        <BaseButton
          class="text-sm px-4 py-2.5 w-1/2 font-semibold tracking-wide rounded-lg"
        >
          Submit
        </BaseButton>
      </div>
    </form>
  </div>
</template>
