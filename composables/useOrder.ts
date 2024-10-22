import { toast } from "vue-sonner";

export function useOrder() {
  const { create, findOne } = useStrapi();

  const createOrder = async (data: any) => {
    try {
      const response = await create<any>("order/createOrder", {
        ...data,
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to place order");
    }
  };

  const getUserOrders = async () => {
    try {
      const response = await findOne<IOrder>("order/getMyOrders", {
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
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to apply voucher");
    }
  };

  return { createOrder, getUserOrders, applyVoucher };
}
