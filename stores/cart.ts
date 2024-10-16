import { toast } from "vue-sonner";

export const useCartStore = defineStore(
  "cart",
  () => {
    // My cState
    const items = ref<ICartItem[]>([]);
    const totalQuantity = ref<number>(0);

    // Actions
    const addItemToCart = (
      newItem: ICartItem,
      itemId: number,
      quantity: number = 1,
      size: string,
      showToast: boolean = false
    ) => {
      const existingItem = items.value.find((item) => {
        item.id === itemId && item.size === size;
        return true;
      });
      console.log(newItem, "its new item");
      if (!existingItem) {
        totalQuantity.value += quantity;
        items.value.push({
          id: itemId,
          price: newItem.price,
          name: newItem.name,
          main_image: newItem.main_image.data.attributes.url,
          quantity: quantity,
          totalPrice: newItem.price,
          size: size,
        });
      } else {
        // existingItem.quantity++;
        // existingItem.totalPrice += newItem.attributes.price;
        console.log(quantity, "its quantity");
        if (quantity === 1) {
          existingItem.quantity++;
          existingItem.totalPrice += newItem.price;
          totalQuantity.value++;
        } else {
          existingItem.quantity += quantity;
          existingItem.totalPrice += newItem.price * quantity;
          totalQuantity.value += quantity;
          // totalQuantity.value += existingItem.quantity;
        }
      }

      if (showToast) {
        toast.success(`${newItem.name} added to cart`);
      }
    };

    const removeItemFromCart = (id: number) => {
      const existingItem = items.value.find((item) => item.id === id);
      totalQuantity.value--;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          items.value = items.value.filter((item) => item.id !== id);
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
