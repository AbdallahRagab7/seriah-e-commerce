<template>
  <div class="grid grid-cols-3 items-center gap-4 mb-12">
    <div class="col-span-2 flex items-center gap-4">
      <!-- to make image size static , don't shrink when resizing -->
      <NuxtLink :to="`/product/${cartItem?.productId}`">
        <div class="w-24 h-24 shrink-0 p-2 rounded-md">
          <NuxtImg
            :src="`${$config.public.STRAPI_URL}${cartItem?.productMainImage}`"
            class="w-full h-full object-cover"
          />
        </div>
      </NuxtLink>
      <div>
        <h3 class="text-base mb-1 font-medium hover:text-primary">
          <NuxtLink :to="`/product/${cartItem?.productId}`">
            {{ cartItem?.productTtitle }}
          </NuxtLink>
        </h3>
        <!-- <h6 class="text-xs text-red-500 cursor-pointer mt-0.5 hover:underline">
          Remove
        </h6> -->

        <div class="flex items-center gap-4 mt-4">
          <div>
            <button
              type="button"
              class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >
              <Icon
                name="iconamoon:sign-minus-bold"
                class="w-5 h-5 text-black"
                @click="cartStore.removeItemFromCart(cartItem.variantId)"
              />
              <span class="mx-2 text-sm">{{ cartItem?.quantity }}</span>

              <!-- @click="cartStore.addItemToCart(cartItem, cartItem.id, 1)" -->

              <button
                @click="
                  cartStore.addItemToCart({
                    ...cartItem,
                    quantity: 1,
                  })
                "
                :disabled="disableIncrease"
                class="w-5 h-5 text-black"
              >
                <Icon
                  name="iconamoon:sign-plus-fill"
                  class="w-5 h-5 text-black"
                />
              </button>
            </button>
          </div>
          <div>
            <h1 class="font-medium text-sm">
              Variant:
              <span class="text-gray-700 text-sm">
                {{ cartItem?.variantTitle }}</span
              >
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="ml-auto">
      <h4 class="text-base text-black">
        <span class="currency">EGP</span>
        {{ cartItem?.price }}
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();

interface Props {
  cartItem: ICartItem;
}

const props = defineProps<Props>();
const disableIncrease = computed(
  () => props.cartItem?.maximumOrderQuantity <= props.cartItem?.quantity
);
</script>
