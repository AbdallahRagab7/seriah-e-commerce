import { toast } from "vue-sonner";

export function useOrder() {
  const { create, findOne } = useStrapi();
  const cartStore = useCartStore();
  const router = useRouter();

  const createOrder = async (data: any) => {
    try {
      const response = await create<any>("order/createOrder", {
        ...data,
      });
      toast.success("Order is created successfully");
      cartStore.items = [];
      cartStore.totalQuantity = 0;
      router.push("/profile");

      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to place order");
    }
  };

  const getUserOrders = async () => {
    try {
      const response = await findOne("order/getMyOrders", {
        populate: "*",
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch orders");
    }
  };

  const applyVoucher = async (data: any) => {
    try {
      const response = await create<any>("voucher/isVoucherAvailable", {
        ...data,
      });
      toast.success("Voucher is applied successfully");
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to apply voucher");
    }
  };

  return { createOrder, getUserOrders, applyVoucher };
}
