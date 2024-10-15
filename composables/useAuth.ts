import { toast } from "vue-sonner";

export function useAuth() {
  const { create } = useStrapi();

  const createCheckoutAccount = async (data: any) => {
    try {
      const response = await create<any>("subscribers", {
        data,
      });

      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to place order");
    }
  };

  return { createCheckoutAccount };
}
