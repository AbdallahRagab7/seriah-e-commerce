import { toast } from "vue-sonner";

export function useProducts() {
  const { find, findOne } = useStrapi();

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
  const getProduct = async (productId: number) => {
    try {
      const response = await findOne<IProduct>("products", productId, {
        populate: "*", // Populate all related data
      });
      return response; // here return response to use meta in pagination
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch product");

      throw new Error((error as Error)?.message || "Failed to fetch product");
    }
  };

  return { getProducts, getProduct };
}
