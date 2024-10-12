import { toast } from "vue-sonner";

export function useProducts() {
  const { find } = useStrapi();

  const getProducts = async () => {
    try {
      const response = await find<IProduct>("products", {
        populate: "*", // Populate all related data
      });
      return response?.data;
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch products");

      throw new Error((error as Error)?.message || "Failed to fetch products");
    }
  };

  return { getProducts };
}
