import { toast } from "vue-sonner";

export const useCartStore = defineStore(
  "cart",
  () => {
    // My cState
    const items = ref<ICartItem[]>([]);
    const totalQuantity = ref<number>(0);

    // Actions
    const addItemToCart = (
      cartItem: ICartItem,
      newQuantity: number,
      showToast: boolean = false
    ) => {
      const existingItem = items.value.find(
        (item) => item.variantId === cartItem.variantId
      );
      if (!existingItem) {
        console.log(cartItem, "its new item");
        totalQuantity.value += cartItem.quantity;
        items.value.push({
          productId: cartItem.productId,
          variantId: cartItem.variantId,
          price: cartItem.price,
          productTtitle: cartItem.productTtitle,
          productMainImage: cartItem.productMainImage,
          quantity: cartItem.quantity, // current quantity
          variantTitle: cartItem.variantTitle,
          maximumOrderQuantity: cartItem.maximumOrderQuantity,
          totalPrice: cartItem.price, // 34an h7sb b3ha quantity * price b3d kda
        });
      } else {
        console.log(existingItem, "its existing itemmm");
        console.log(newQuantity, "its number of new added quantityyy");

        if (
          cartItem.maximumOrderQuantity <
          existingItem.quantity + newQuantity
        ) {
          toast.error(`Maximum quantity is ${cartItem.maximumOrderQuantity}`);
          return;
        }
        if (cartItem.quantity === 1) {
          existingItem.quantity++;
          existingItem.totalPrice += cartItem.price;
          totalQuantity.value++;
        } else {
          existingItem.quantity += cartItem.quantity;
          existingItem.totalPrice += cartItem.price * cartItem.quantity;
          totalQuantity.value += cartItem.quantity;
          // totalQuantity.value += existingItem.quantity;
        }
      }

      if (showToast) {
        toast.success(`${cartItem.productTtitle} added to cart`);
      }
    };

    const removeItemFromCart = (variantId: number) => {
      const existingItem = items.value.find(
        (item) => item.variantId === variantId
      );
      totalQuantity.value--;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          items.value = items.value.filter(
            (item) => item.variantId !== variantId
          );
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    };

    return {
      items,
      totalQuantity,
      addItemToCart,
      removeItemFromCart,
    };
  },
  {
    persist: true,
  }
);
