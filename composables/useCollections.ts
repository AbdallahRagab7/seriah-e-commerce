import { toast } from "vue-sonner";

export function useCollections() {
  const { find, findOne } = useStrapi();

  const getCollectionProducts = async (
    pagination = { page: 1, pageSize: 10 },
    filters = {},
    collectionId: number
  ) => {
    try {
      const response = await find<IProduct>("products", {
        populate: "*", // Populate all related data
        pagination,
        filters: {
          ...filters,
          collections: {
            id: {
              $eq: collectionId,
            },
          },
        },
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch products");

      // throw new Error(error.error.message || "Failed to fetch products");
    }
  };

  const getCollections = async () => {
    try {
      const response = await find<ICollection>("collections", {
        populate: "*",
      });
      return response?.data;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch Collections");
    }
  };

  const getCollection = async (collectionId: number) => {
    try {
      const response = await findOne<ICollection>("collections", collectionId, {
        populate: "*",
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch Collection");
    }
  };

  return { getCollectionProducts, getCollection, getCollections };
}
