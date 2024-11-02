<template>
  <div class="myContainer mx-auto px-4 py-[65px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9">
      <section class="space-y-6">
        <div class="lg:h-[350px] overflow-hidden">
          <NuxtImg
            alt="Product"
            class="w-full rounded-sm object-cover aspect-[134/89]"
            :src="`${$config.public.STRAPI_URL}${activeImage}`"
          />
        </div>

        <div class="flex flex-wrap gap-5 overflow-hidden">
          <NuxtImg
            v-for="image in productImages"
            :key="image"
            :src="`${$config.public.STRAPI_URL}${image}`"
            @click="activeImage = image"
            alt="ProductImage"
            class="w-[18%] cursor-pointer object-cover rounded-sm"
            :class="activeImage === image ? 'border-2 border-green-500' : ''"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h1 class="text-2xl font-medium text-customGray">
          {{ product?.data.attributes.name }}

          <!-- <span
            class="text-green-500 inline-flex items-center gap-[2px] text-xs font-normal"
          >
            In Stock
            <Icon name="carbon:checkmark-filled" style="color: #0da032" />
          </span> -->
        </h1>
        <div class="mt-8 space-y-4">
          <p class="text-customSlate text-sm">
            {{ product?.data.attributes.short_description }}
          </p>
        </div>

        <div class="flex items-center space-x-4 text-gray-500">
          <span class="text-lg text-black">
            {{ currentPrice }}
            <span class="currency mr-1">EGP</span></span
          >
          <span
            v-if="
              product?.data?.attributes?.sale_price !=
              product?.data?.attributes?.price
            "
            class="text-xs"
          >
            <!-- START OF SALE PRICE -->
            <span class="line-through">
              {{ product?.data?.attributes?.price }}
            </span>
            <span class="currency ml-1">EGP</span>
          </span>
          <!-- End of sale price -->
          <!-- Start of  price-->

          <!-- End of price -->
        </div>
        <div class="flex items-center space-x-2">
          <label for="quantity" class="text-customSlate text-sm"
            >Quantity:</label
          >
          <div class="flex items-center">
            <button
              type="button"
              class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >
              <Icon
                name="iconamoon:sign-minus-bold"
                class="w-5 h-5 text-black"
                @click="decreaseCounter"
              />
              <span class="mx-2 text-sm">{{ quantityCounter }}</span>

              <Icon
                name="iconamoon:sign-plus-fill"
                class="w-5 h-5 text-black"
                @click="quantityCounter++"
              />
            </button>
          </div>
        </div>
        <div>
          <h3 class="text-customSlate text-sm">
            Maximum Quantity: {{ variant?.attributes?.quantity }}
          </h3>
        </div>

        <h2 class="font-medium text-sm">Size:</h2>
        <div class="!mb-8 !mt-3 font-medium text-[15px] text-[#1f2021]">
          <button
            v-for="myVariant in product?.data?.attributes?.product_variants
              ?.data"
            :key="myVariant.id"
            @click="variant = myVariant"
            :disabled="myVariant?.attributes?.quantity == 0"
            class="px-2 py-1 mr-6 rounded-sm"
            :class="{
              'border border-gray-800 ': variant?.id === myVariant?.id,
              'cursor-not-allowed line-through':
                myVariant?.attributes?.quantity == 0,
            }"
          >
            {{ myVariant?.attributes?.title }}
          </button>
        </div>

        <div class="!mt-6 flex items-center gap-3">
          <BaseButton
            @click="addCart"
            class="w-full py-3 text-white rounded-md flex items-center justify-center"
          >
            <Icon name="iconamoon:sign-plus" /> Add to Cart
          </BaseButton>
          <BaseButton
            @click="buyNow"
            class="w-full py-3 text-white rounded-md flex items-center justify-center !bg-secondary"
          >
            <Icon name="material-symbols-light:shopping-cart-checkout-sharp" /> BUY NOW
          </BaseButton>
        </div>
      </section>
    </div>
    <!-- Description and Additional -->
    <div class="mt-12 mb-10 space-y-4 max-w-[80%] md:max-w-[50%]">
      <div class="flex items-center gap-10 text-customSlate mb-6">
        <button
          class="text-base font-medium"
          :class="{ 'text-black': activeTab === 'description' }"
          @click="activeTab = 'description'"
        >
          Description
        </button>
        <button
          class="text-base font-medium"
          @click="activeTab = 'additional'"
          :class="{ 'text-black': activeTab === 'additional' }"
          v-if="product?.data?.attributes?.additional_info?.length > 0"
        >
          Additional Info
        </button>
      </div>
      <p class="text-customSlate text-sm" v-if="activeTab === 'description'">
        {{ product?.data?.attributes?.long_decription }}
      </p>
      <div v-else>
        <table class="w-full text-left border-gray-300">
          <tbody>
            <tr
              v-for="(item, index) in product?.data?.attributes
                ?.additional_info"
              :key="index"
              class="border-b border-gray-300"
            >
              <td class="py-2 px-4 font-medium text-gray-700">
                {{ item.key }}
              </td>
              <td class="py-2 px-4 text-gray-500">{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const route = useRoute();
const { getProduct } = useProducts();
const cartStore = useCartStore();
const { data: product } = await useAsyncData("productt", () =>
  getProduct(route.params.productId as any)
);



//choose first variant as initial
const variant = ref(product.value?.data.attributes?.product_variants?.data[0]);

const productImages = computed(() => {
  const main_image =
    product?.value?.data?.attributes?.main_image?.data?.attributes?.url;
  let images = product?.value?.data?.attributes?.images?.data || [];

  images = images.map((image: any) => image.attributes.url) || [];
  return [main_image, ...images];
});

const currentPrice = computed(() => {
  let currentPrice =
    product.value?.data?.attributes?.sale_price ==
    product.value?.data?.attributes?.price
      ? product.value?.data?.attributes?.price
      : product.value?.data?.attributes?.sale_price;

  if (variant.value?.attributes?.price) {
    return variant.value?.attributes?.price;
  }
  return currentPrice;
});

const activeImage = ref<string>(productImages.value[0]);

const quantityCounter = ref<number>(1);
const decreaseCounter = () => {
  if (quantityCounter.value > 1) {
    quantityCounter.value--;
  }
};

// seo section
useSeoMeta({
 title: product?.value?.data.attributes?.seo?.metaTitle ||  product.value?.data.attributes.name ,
 description: product?.value?.data.attributes?.seo?.metaDescription || product.value?.data.attributes.short_description,
 ogImage: `${useRuntimeConfig().public.STRAPI_URL}${product?.value?.data.attributes?.seo?.metaImage?.data?.attributes?.url || product.value?.data?.attributes?.main_image?.data?.attributes?.url}` || "" ,
 keywords:() => product.value?.data.attributes?.seo?.keywords || "",
})

useSchemaOrg(
  defineProduct({
    name: product.value?.data.attributes.name,
    image: `${useRuntimeConfig().public.STRAPI_URL}${product?.value?.data.attributes?.main_image?.data?.attributes?.url || ""}`,
    description: product.value?.data.attributes.short_description,
    offers:currentPrice.value,
    sku: product.value?.data.attributes.product_variants.data[0].attributes.sku,
  })
)

const addCart = () => {
  if (quantityCounter.value > variant.value?.attributes?.quantity) {
    toast.error(`Maximum quantity is ${variant.value?.attributes?.quantity}`);
    return;
  }
  cartStore.addItemToCart(
    {
      productId: product.value?.data?.id, // 34an aro7 beh ly product fi page cart
      productMainImage:
        product.value?.data?.attributes?.main_image?.data?.attributes?.url ||
        "", // to render img of item in cart
      variantId: variant.value.id,
      variantTitle: variant.value?.attributes?.title, // to render in cart
      quantity: quantityCounter.value,
      maximumOrderQuantity: variant.value?.attributes?.quantity, // to disable btn in cart
      productTtitle: product.value?.data?.attributes?.name, // to render name of item in cart
      price: currentPrice.value,
    },
    quantityCounter.value,
    true
  );
};

const buyNow = () => {
  addCart();
  navigateTo("/checkout");
}

//TABS
const activeTab = ref("description");
</script>
