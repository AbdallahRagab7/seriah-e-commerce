<template>
  <NuxtLink to="/product/1">
    <div
      class="w-full max-w-sm mx-auto shadow-md border border-gray-200 rounded-lg"
    >
      <div class="overflow-hidden !rounded-md">
        <NuxtImg
          class="max-h-[90%] max-w-[85%] rounded-md my-5 object-contain mix-blend-multiply mx-auto"
          src="/apple-watch.png"
          alt="product image"
        />
      </div>

      <div class="px-5 pb-5">
        <a href="#">
          <!-- font-poppins -->
          <h5
            class="text-base font-poppins mb-5 text-black hover:text-primary line-clamp-4"
          >
            Apple Watch Series 7 GPS, Aluminium Case, Apple Watch
          </h5>
        </a>

        <div class="flex items-center justify-between">
          <div class="text-lg text-gray-900">
            <span class="text-[11px] text-slate-500"> EGP </span>

            <span class="font-semibold"> 699</span>

            <span class="sale mx-1 text-sm line-through text-slate-500">
              $999
            </span>
          </div>
          <a
            href="#"
            class="custom-btn border-secondary border font-medium rounded-lg text-sm p-1.5 text-center"
            >Add to cart</a
          >
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.custom-btn {
  position: relative;
  background: transparent;
  color: var(--secondary-color);
  border-color: var(--secondary-color);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}

.custom-btn:hover {
  color: white;
}

.custom-btn::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--secondary-color);
  transition: 0.5s;
  z-index: -1;
}
.custom-btn:hover::before {
  width: 100%;
}
</style>
