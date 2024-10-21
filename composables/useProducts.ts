import { toast } from "vue-sonner";

export function useProducts() {
  const { find, findOne } = useStrapi();

  const getProducts = async (
    pagination = { page: 1, pageSize: 10 },
    filters = {}
  ) => {
    try {
      const response = await find<IProduct>("products", {
        populate: {
          main_image: true,
          images: true,
          product_variants: {
            populate: "*",
          },
        },
        pagination,
        filters,
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch products");

      // throw new Error(error.error.message || "Failed to fetch products");
    }
  };
  const getProduct = async (productId: number) => {
    try {
      const response = await findOne<IProduct>("products", productId, {
        populate: {
          main_image: true,
          images: true,
          product_variants: {
            populate: "*",
          },
        },
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch product");

      // throw new Error(error.error.message || "Failed to fetch product");
    }
  };

  const getCategories = async () => {
    try {
      const response = await find<ICategory>("categories", {
        populate: "*", // Populate all related data
      });
      return response?.data;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch categories");
    }
  };

  return { getProducts, getProduct, getCategories };
}
