import { toast } from "vue-sonner";

export function useOrder() {
  const { create } = useStrapi();

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

  return { createOrder };
}
