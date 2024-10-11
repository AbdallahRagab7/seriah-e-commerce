<template>
  <NuxtLink to="/product/1">
    <div
      class="w-full max-w-sm mx-auto border border-gray-100 rounded-sm max-sm:px-5"
    >
      <div class="overflow-hidden !rounded-md">
        <NuxtImg
          class="max-h-[90%] max-w-[90%] rounded-md my-5 object-contain mix-blend-multiply mx-auto"
          src="/apple-watch.png"
          alt="product image"
        />
      </div>

      <div class="px-5 pb-5">
        <a href="#">
          <!-- font-poppins -->
          <h5
            class="text-sm mb-5 text-customSlate hover:text-primary line-clamp-4"
          >
            Apple Watch Series 7 GPS, Aluminium Case, Apple Watch
          </h5>
        </a>

        <div class="flex items-center justify-between">
          <div class="text-lg text-gray-900">
            <span class="text-[11px] text-black font-medium"> EGP </span>

            <span class="text-sm text-black font-medium"> 699</span>

            <span class="sale mx-1 text-xs line-through text-customSlate">
              $999
            </span>
          </div>

          <!-- <div class="flex items-center space-x-4 text-gray-500">
            <span class="text-xs line-through">$50.00</span>
            <span class="text-base text-black">$35.00</span>
          </div> -->
          <!-- <a
            href="#"
            class="custom-btn border-secondary border font-medium rounded-lg text-sm p-[5px] text-center"
            >Add to cart</a
          > -->

          <a
            href="#"
            class="add-cart text-[bc8246] relative text-sm font-medium hover:text-primary"
            >+ Add to Cart</a
          >
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
/* .custom-btn {
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
  background: #201f1f;
  transition: 0.5s;
  z-index: -1;
}
.custom-btn:hover::before {
  width: 100%;
} */

.add-cart:after {
  background: #201f1f;
  bottom: -2px;
  content: "";
  height: 1px;
  left: 5px;
  position: absolute;
  width: 95%;
  transition: all 0.3s ease-out 0s;
}

.add-cart:hover {
  /* color: #bc8246; */
  color: var(--primary-color);
}

.add-cart:hover:after {
  /* background-color: #bc8246; */
  background-color: var(--primary-color);
}
</style>
