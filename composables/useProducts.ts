import { toast } from "vue-sonner";

export function useProducts() {
  const { find } = useStrapi();

  const getProducts = async (pagination = { page: 1, pageSize: 10 }) => {
    try {
      const response = await find<IProduct>("products", {
        populate: "*", // Populate all related data
        pagination,
      });
      return response; // here return response to use meta in pagination
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch products");

      throw new Error((error as Error)?.message || "Failed to fetch products");
    }
  };

  return { getProducts };
}
