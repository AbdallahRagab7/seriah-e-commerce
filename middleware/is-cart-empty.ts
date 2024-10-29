import { useCartStore } from "~/stores/cart";
export default defineNuxtRouteMiddleware((to, from) => {
  const cartStore = useCartStore();
  if (cartStore.items.length === 0) {
    return navigateTo("/");
  }
});
